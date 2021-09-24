const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('../config/passport-config');
const User = require('../models/user');
const router = express.Router();
const {checkAuthenticated, checkNotAuthenticated, checkUserCity, checkError, checkIsAdmin} = require('../public/js/check')

initializePassport(
    passport,
    email => User.findOne({ email }),
    id => User.findOne({ id })
);

router.get('/', checkAuthenticated, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    try {
        const currentUserID = req.session.passport.user;
        currentUser = await User.findById(currentUserID).populate('city');
        if (currentUser.isAdmin) {
            return res.render('index/index.ejs', { user: currentUser, layout: 'layouts/admin-layout' });
        } else {
            return res.render('index/index.ejs', { user: currentUser, layout: 'layouts/user-layout' });
        }

    } catch {
        res.redirect('/login')
    }
});

router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('index/login.ejs', { layout: false });
});

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

// router.get('/register', checkNotAuthenticated, (req, res) => {
//     res.render('index/register.ejs');
// });

// router.post('/register', checkNotAuthenticated, async (req, res) => {
//     const user = new User();
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         user.name = req.body.name;
//         user.email = req.body.email;
//         user.password = hashedPassword;
//         try {
//             const newUser = await user.save();
//         } catch (err) {
//             console.log(err);
//         }
//         res.redirect('/');
//     } catch (err) {
//         console.log(err);
//         res.redirect('/register');
//     };
// });

router.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
});


module.exports = router;