const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/events', (req, res) => {
 const event = req.body;
 console.log('masuk pak eko');

 axios.post('http://localhost:5000/events', event);
 axios.post('http://localhost:5001/events', event);
 axios.post('http://localhost:5002/events', event);

 res.send({ status: 'OK' });
});

app.listen(5005, () => {
  console.log('Listening on 5005');
});