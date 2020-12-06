const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', function (req, res, next) {
    res.render('countdown');
});

app.listen(5000, function () {
    console.log("Started on port 5000");
});