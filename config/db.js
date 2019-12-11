'use strict'

const Sequelize = require('sequelize');
const ENV = require('../env/development.json');
let sequelize = null

let setupDatabase = () => {
  if (!sequelize) {
    sequelize = new Sequelize(ENV.db.database, ENV.db.username, ENV.db.password, {
      host: ENV.db.host,
      dialect: 'mysql',
      define: {
        timestamps: false,
        freezeTableName: true
      }
    });

    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  }

  return sequelize
}

module.exports = {
  setupDatabase
}