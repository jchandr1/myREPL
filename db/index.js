const Sequelize = require('sequelize');

const db = new Sequelize('myREPL', 'student', 'student', {
  host: '127.0.0.1',
  port: 3000,
  dialect: 'mysql',
});

const savedFiles = db.define('savedFiles', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: Sequelize.STRING // Sequelize.INT for ID, verification stuff
})

module.exports = db;