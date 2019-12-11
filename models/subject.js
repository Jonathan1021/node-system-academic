'use strict'

const Sequelize = require('sequelize');
const db = require('../config/db')

let setupSubjectModel = () => {
  const sequelize = db.setupDatabase()
  return sequelize.define('asignatura', {
    id_asignatura: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: Sequelize.TEXT,
    creditos: Sequelize.INTEGER
  })
}

module.exports = setupSubjectModel