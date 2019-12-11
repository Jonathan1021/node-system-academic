'use strict'

const Sequelize = require('sequelize');
const db = require('../config/db')

let setupGroupModel = () => {
  const sequelize = db.setupDatabase()
  return sequelize.define('estudiante_grupo', {
    id_estudiante: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_grupo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nota1: Sequelize.FLOAT,
    nota2: Sequelize.FLOAT,
    nota3: Sequelize.FLOAT
  })
}

module.exports = setupGroupModel