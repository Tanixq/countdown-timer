const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', function (req, res, next) {
    res.render('countdown');
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
  console.log("Server Started Sucessfully on Port 5000 !");
};

app.listen(port, function (reqest, response) {
  console.log("Server Started Sucessfully !");
});