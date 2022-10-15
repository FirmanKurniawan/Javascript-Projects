// Note: requires axios package.
const axios = require('axios');

// Axios request
async function generateTinyurl(token, url){
    return axios({
    method: 'post',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    url: "https://api.tinyurl.com/create",
    data: {
        url: url,
        domain: 'tiny.one',
        'expires_at':null,
    }
})
}

// Enter tinyurl token here
const token = 'Your token here';
const url = 'URL here';

// Output tinyurl
generateTinyurl(token, url)
.then(responce=>console.log(responce.data['data']['tiny_url']))
.catch(err=>console.log(err.message));