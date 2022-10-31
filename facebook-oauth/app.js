require('dotenv').config()
const express = require('express'); const app = express();
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport'); // passport settings library
const FacebookStrategy = require('passport-facebook').Strategy;
const router = require('./routes/index')
const config = require('./config/index')

const {
    PORT
} = process.env

// body parser should be on top before everything else
app.use(express.urlencoded({extended: false}));

// this is session handlers 
app.use(session({
    secret: 'This is a secret', 
    resave: false,
    saveUninitialized: true
}));

// must be before the router and view engine 
app.use(passport.initialize());
app.use(passport.session());

// to create the session
passport.serializeUser( (user, cb) => { cb(null, user); } )
passport.deserializeUser( (obj, cb) => { cb(null, obj); } )


// facebook oauth strategy
passport.use(new FacebookStrategy({ 
        clientID: config.facebookAuth.clientID,
        clientSecret: config.facebookAuth.clientSecret,
        callbackURL: config.facebookAuth.callbackURL
    }, (accessToken, refreshToken, profile, done) =>  { 
        return done(null, profile);
    }
));

// set flash
app.use(flash());

// set the view engine with ejs
app.set('view engine', 'ejs');

// set the router  
app.use(router);
app.listen(PORT, () => { console.log(`running at port ${PORT}`) });


