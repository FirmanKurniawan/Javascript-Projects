const router = require('express').Router();
const passport = require('passport')
const middleware = require('../middlewares/auth')

// iNDEX
// add the middleware so people who authorize to see index page just the authenticated userj
router.get('/', (req, res) => res.render('pages/index.ejs'));

// PROFILES
router.get('/profile', middleware.isLoggedIn, (req, res) => {
    res.render('pages/profile.ejs', { 
        user: req.user
    });
});

// ERROR
router.get('/error', middleware.isLoggedIn, (req, res) => {
    res.render('pages/error.ejs');
});


// LOGIN WITH FACEBOOK
router.get('/auth/facebook',
    passport.authenticate('facebook', {
        scope:['public_profile', 'email']
    })
)
router.get('/auth/facebook/callback', 
    passport.authenticate('facebook', { 
        successRedirect: '/profile',
        failureRedirect: '/error',
})); // method 

// LOGOUT
router.get('/logout', (req, res, next) => {
    try { 
        res.logout();
        res.redirect('/');
    } catch(err) { 
        next(err)
    }
})


module.exports = router;
