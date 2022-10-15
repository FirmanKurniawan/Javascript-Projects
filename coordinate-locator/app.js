const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const response = require("express");
const { timeStamp } = require("console");
const NodeGeocoder = require('node-geocoder');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "1mb" }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/api", function (req, res) {
    console.log(req.body);
    console.log("request received");
    const data = req.body;
    const time = Date.now();
    data.time = time;
    res.json({
        status: "success",
        latitude: data.lat,
        longitude: data.lon,
        time: time,
    });
});


app.listen(3000, function (req, res) {
    console.log(`Server is  running on PORT`);
});



