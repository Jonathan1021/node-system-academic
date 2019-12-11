'use strict'

const appRoot = require('app-root-path')
const winston = require('winston')
const moment = require('moment')
const ENV = require('../env/development.json')

/** Definir las configuraciones personalizadas para cada transporte (archivo, consola). */
let options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/academic_student.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
}

/** Crea una instancia de un nuevo Winston Logger con la configuración definida anteriormente */
const logger = new winston.createLogger({
  transports: [
    new winston.transports.File(options.file)
  ],
  exitOnError: false // do not exit on handled exceptions
})

/** cree un objeto de flujo con una función de 'escritura' que será utilizada por `morgan` */
logger.stream = {
  write: function (message) {
    /** use el nivel de registro 'info' para que la salida sea recogida por ambos transportes (archivo y consola) */
    logger.info(message)
  }
}

if (ENV.node_env !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

/**
 * Error Fatal
 */
logger.fatal = (msg) => {
  const date = moment().format('DD/MM/YYYY hh:mm:ss a')
  logger.error(`${date} | ${msg}`)
}

module.exports = logger