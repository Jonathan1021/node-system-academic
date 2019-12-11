'use strict'

const Sequelize = require('sequelize');
const db = require('../config/db')

let setupGroupModel = () => {
  const sequelize = db.setupDatabase()
  return sequelize.define('grupo', {
    id_grupo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_asignatura: Sequelize.INTEGER,
    id_profesor: Sequelize.INTEGER,
    salon: Sequelize.TEXT,
    hora_inicio: Sequelize.TEXT,
    hora_fin: Sequelize.TEXT
  })
}

module.exports = setupGroupModel