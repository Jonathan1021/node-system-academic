'use strict'

const Sequelize = require('sequelize');
const db = require('../config/db')

let setupTeacherModel = () => {
  const sequelize = db.setupDatabase()
  return sequelize.define('profesor', {
    id_profesor: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: Sequelize.TEXT,
    apellidos: Sequelize.TEXT,
    correo: Sequelize.TEXT,
    fecha_nacimiento: Sequelize.DATE,
    telefono: Sequelize.TEXT
  })
}

module.exports = setupTeacherModel