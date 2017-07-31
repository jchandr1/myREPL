const express = require('express');
const app = express();
const parser = require('body-parser');
const axios = require('axios');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.listen(3000, (err) => {
  if (err) {
    console.log("server error");
  } else {
    console.log("Listening to port 3000");
  }
});