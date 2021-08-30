const express = require('express')
const router = express.Router()
const City = require('../models/city')
const User = require('../models/user')
const formidable = require('formidable')
const fs = require('fs')

// All cities Route
router.get('/', checkAuthenticated, checkIsAdmin, async (req, res) => {
  res.locals.errorMessage = checkError(req);
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
    const cities = await City.find(searchOptions).sort({ createdAt: -1 }).populate('city')
    if (req.query.error) {
      res.locals.errorMessage = req.query.error
    } else {
      res.locals.errorMessage = null
    }
    res.render('cities/index', {
      cities: cities,
      search: req.query.search,
      // errorMessage: errorMessage
    })
  } catch {
    res.redirect('/')
  }
})

// Display New City Route
router.get('/new', checkAuthenticated, checkIsAdmin, (req, res) => {
  res.locals.errorMessage = checkError(req);
  res.render('cities/new', { city: new City() })
})

// Create City Route
router.post('/', checkAuthenticated, checkIsAdmin, (req, res) => {
  res.locals.errorMessage = checkError(req);
  const form = formidable({multiples:false})
  form.parse(req, async (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    const od = JSON.parse(fs.readFileSync(files.od.path, 'utf8'))
    const zoneamento = JSON.parse(fs.readFileSync(files.zoneamento.path, 'utf8'))
    try {
      cidade = new City({ 
        name: fields.name,
        od: od,
        zoneamento: zoneamento
      })
  
      const newCity = await cidade.save()
    } catch (err) {
      console.log(err);
      return res.render('cities/new', {
        city: city,
        errorMessage: 'Erro ao criar Cidade'
      });
    }
    res.redirect(`cities/`)
  });
})


router.get('/:id/edit', checkAuthenticated, checkIsAdmin, async (req, res) => {
  res.locals.errorMessage = checkError(req);
  try {
    const city = await City.findById(req.params.id)
    res.render('cities/edit', { city: city })
  } catch {
    res.redirect('/cities')
  }
})

router.put('/:id/', checkAuthenticated, checkIsAdmin, (req, res) => {
  res.locals.errorMessage = checkError(req);
  let city
  const form = formidable({multiples:false})
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err)
      next(err);
      return;
    }
    let od = null
    let zoneamento = null
    if (files) {
      // console.log(files)
      zoneamento = JSON.parse(fs.readFileSync(files.zoneamento.path, 'utf8'))
    } 
    try {
      city = await City.findById(req.params.id)
      city.name = fields.name
      if (zoneamento) { city.zoneamento = zoneamento }
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
  });
})

router.delete('/:id', checkAuthenticated, checkIsAdmin, async (req, res) => {
  res.locals.errorMessage = checkError(req);
  let city
  try {
    city = await City.findById(req.params.id)
    await city.remove()
    res.redirect('/cities')
  } catch (err) {
    if (city == null) {
      res.redirect('/')
    } else {
      // res.locals.errorMessage = err.message
      res.redirect(`/cities?error=${err.message}`)
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