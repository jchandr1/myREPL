const express = require('express');
const app = express();
const parser = require('body-parser');
const axios = require('axios');
// const db = require('../db/config');
// const files = require('../db');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('/Users/student/code/myREPL/compiled'));
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.post('/compile', (req, res) => {
  console.log('code= ', req.body);
  // console.log('result= ', eval(req.body.code));
  res.end();
});

// app.post('/save', (req, res) => {
//   files.build({ username:'hello' }).save
//   res.end();
// })

app.listen(4000, (err) => {
  if (err) {
    console.log("server error");
  } else {
    console.log("Listening to port 4000");
  }
});