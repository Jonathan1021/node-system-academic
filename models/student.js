'use strict'

const Sequelize = require('sequelize');
const db = require('../config/db')

let setupStudentModel = () => {
  const sequelize = db.setupDatabase()
  return sequelize.define('estudiante', {
    id_estudiante: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: Sequelize.TEXT,
    apellidos: Sequelize.TEXT,
    correo: Sequelize.TEXT,
    fecha_nacimiento: Sequelize.DATE,
    telefono: Sequelize.TEXT,
    latitud: Sequelize.TEXT,
    longitud: Sequelize.TEXT
  })
}

module.exports = setupStudentModel