const Sequelize = require('sequelize');
const db = require('./config.js');

const savedFiles = db.define('savedFiles', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: Sequelize.STRING // Sequelize.INT for ID, verification stuff
})
console.log('a');
savedFiles.sync({ force: true })
.then(() => {
  return savedFiles.bulkCreate([{username: 'hello'}, {username: '2'}])
})
console.log('b');

// savedFiles.create({ username: 'hello' })
// .then(()=>console.log('it worked'))
// .catch(err => console.log('error ', err));

module.exports = savedFiles;