'use strict'

const SUCCESS = {
  status: 200,
  code: '01',
  message: 'Petición exitosa'
}

const USER_AUTH = {
  status: 200,
  code: '02',
  message: 'Usuario autenticado con exito',
  response: null
}

const RECOVER_PASSWORD = {
  status: 200,
  code: '03',
  message: 'Se ha enviado un correo de recuperación',
  response: null
}

module.exports = {
  SUCCESS,
  USER_AUTH,
  RECOVER_PASSWORD
}