const express = require('express')
const router = express.Router()
const City = require('../models/city')
const User = require('../models/user')
const bcrypt = require('bcrypt');

// All cities Route
router.get('/', checkAuthenticated, checkIsAdmin, async (req, res) => {
  let searchOptions = {}
  if (req.query.search != null && req.query.search !== '') {
    searchOptions = {
      $or: [
        {
          name: new RegExp(req.query.search, 'i')
        }
      ]
    }
  };
  try {
    const cities = await City.find(searchOptions).sort({createdAt: -1}).populate('city')
    res.render('cities/index', {
      cities: cities,
      search: req.query.search,
    })
  } catch {
    res.redirect('/')
  }
})

// Display New City Route
router.get('/new', checkAuthenticated, checkIsAdmin, (req, res) => {
  res.render('cities/new', { city: new City() })
})

// Create City Route
router.post('/',  checkAuthenticated, checkIsAdmin, async (req, res) => {
    try {
      cidade = new City({name: req.body.city})
      const newCity = await cidade.save()
    } catch (err) {
      console.log(err);
      return res.render('cities/new', {
        city: city,
        errorMessage: 'Erro ao criar Cidade'
      });
    }
    res.redirect(`cities/`)
})


router.get('/:id/edit', checkAuthenticated, checkIsAdmin, async (req, res) => {
  try {
    const city = await City.findById(req.params.id)
    res.render('cities/edit', { city: city })
  } catch {
    res.redirect('/cities')
  }
})

router.put('/:id/', checkAuthenticated, checkIsAdmin, async (req, res) => {
  let city
  try {
    city = await City.findById(req.params.id)
    city.name = req.body.name
    await city.save()
    res.redirect(`/cities`)
  } catch (err) {
    if (city == null) {
      res.redirect('/')
    } else {
      res.render('cities/edit', {
        city: city,
        errorMessage: 'Erro ao atualizar cidade'
      })
    }
    console.log(err);
  }
})

router.delete('/:id', checkAuthenticated, checkIsAdmin, async (req, res) => {
  let city
  try {
    city = await City.findById(req.params.id)
    await city.remove()
    res.redirect('/cities')
  } catch {
    if (city == null) {
      res.redirect('/')
    } else {
      res.redirect(`/cities`)
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

module.exports = router