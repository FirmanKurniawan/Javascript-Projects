module.exports = { 
    isLoggedIn: (req, res, next) => { 
        try { 
            if(req.isAuthenticated()) return next();
            res.redirect('/')
        } catch(err) { 
            next(err)
        }
    }
}
