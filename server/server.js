const express = require('express');
const app = express();
const parser = require('body-parser');
const axios = require('axios');
const db = require('../db');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

app.post('/save', (req, res) => {
  
})

app.listen(3000, (err) => {
  if (err) {
    console.log("server error");
  } else {
    console.log("Listening to port 3000");
  }
});