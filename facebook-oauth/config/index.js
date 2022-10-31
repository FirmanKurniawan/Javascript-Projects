require('dotenv').config()

const { 
    FACEBOOK_APP_ID, 
    FACEBOOK_APP_SECRET, 
    PORT
} = process.env
module.exports = { 
    'facebookAuth': { 
        'clientID': FACEBOOK_APP_ID,
        'clientSecret': FACEBOOK_APP_SECRET,
        'callbackURL': `http://localhost:${PORT}/auth/facebook/callback`
    }
}
