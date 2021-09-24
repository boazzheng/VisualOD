const passport = require('passport')
const User = require('../../models/user')

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
};

async function checkUserCity(req, res, next) {
    const currentUserID = req.session.passport.user;
    const name_cidade = req.params.city
    currentUser = await User.findById(currentUserID).populate('city')
    if (currentUser.isAdmin) {
        return next();
    } else {
        if (currentUser.city.name === name_cidade) {
            return next();
        } else {
            res.redirect('/')
        }
    };
}

function checkError(req) {
    if (req.query.error) {
        return req.query.error
    } else {
        return null
    }
}

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

module.exports = {
    checkAuthenticated,
    checkNotAuthenticated,
    checkUserCity,
    checkError,
    checkIsAdmin
}