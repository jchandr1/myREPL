const Sequelize = require('sequelize');

const db = new Sequelize('myREPL', 'student', 'student', {
  host: 'localhost',
  port: 4000,
  dialect: 'mysql',
});

module.exports = db;