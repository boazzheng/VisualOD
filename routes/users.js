const express = require('express')
const router = express.Router()
const User = require('../models/user')
const City = require('../models/city')
const bcrypt = require('bcrypt');


// All Users Route
router.get('/', checkAuthenticated, checkIsAdmin, async (req, res) => {
  res.locals.errorMessage = checkError(req);
  let searchOptions = {}
  if (req.query.search != null && req.query.search !== '') {
    searchOptions = {
      name: new RegExp(req.query.search, 'i')
    }
  };
  try {
    const users = await User.find(searchOptions).sort({ createdAt: -1 }).populate('city')
    res.render('users/index', {
      users: users,
      search: req.query.search,
    })
  } catch (err) {
    console.log(err)
    res.redirect('/')
  }
})

// Display New User Route
router.get('/new', checkAuthenticated, checkIsAdmin, (req, res) => {
  res.locals.errorMessage = checkError(req);
  res.render('users/new', { user: new User() })
})

// Create User Route
router.post('/', checkAuthenticated, checkIsAdmin, async (req, res) => {
  res.locals.errorMessage = checkError(req);
  let cidade = await City.findOne({ name: req.body.city })
  // console.log(cidade)
  if (!cidade) {
    try {
      cidade = new City({ name: req.body.city })
      const newCity = await cidade.save()
    } catch (err) {
      console.log(err);
    }
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      city: cidade._id,
      password: hashedPassword
    })
    const newUser = await user.save()
    res.redirect(`users/`)
  } catch (err) {
    console.log(err);
    return res.render('users/new', {
      user: user,
      errorMessage: 'Error creating User'
    });
  }
})


router.get('/:id/edit', checkAuthenticated, checkIsAdmin, async (req, res) => {
  res.locals.errorMessage = checkError(req);
  try {
    const user = await User.findById(req.params.id).populate('city')
    // console.log(user)
    res.render('users/edit', { user: user })
  } catch {
    res.redirect('/users')
  }
})

router.put('/:id/', checkAuthenticated, checkIsAdmin, async (req, res) => {
  res.locals.errorMessage = checkError(req);
  let user
  try {
    user = await User.findById(req.params.id)
    user.name = req.body.name
    user.email = req.body.email
    let cidade = await City.findOne({ name: req.body.city })
    if (!cidade) {
      try {
        cidade = new City({ name: req.body.city })
        const newCity = await cidade.save()
      } catch (err) {
        console.log(err);
      }
    }
    user.city = cidade._id
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword
    }
    await user.save()
    res.redirect(`/users`)
  } catch (err) {
    if (user == null) {
      res.redirect('/')
    } else {
      res.render('users/edit', {
        user: user,
        errorMessage: 'Error updating User'
      })
    }
    // console.log(req.params.id)
    console.log(err);
  }
})

router.delete('/:id', checkAuthenticated, checkIsAdmin, async (req, res) => {
  res.locals.errorMessage = checkError(req);
  let user
  try {
    user = await User.findById(req.params.id)
    await user.remove()
    res.redirect('/users')
  } catch {
    if (user == null) {
      res.redirect('/')
    } else {
      res.redirect(`/users`)
    }
  }
})

router.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

function checkIsAdmin(req, res, next) {
  const currentUserID = req.session.passport.user;
  if (req.isAuthenticated()) {
    currentUser = User.findById(currentUserID, (err, user) => {
      if (user.isAdmin) {
        return next();
      };
      res.redirect('/');
    });
  } else {
    res.redirect('/login')
  };
}

function checkError(req) {
  if (req.query.error) {
    return req.query.error
  } else {
    return null
  }
}

module.exports = router