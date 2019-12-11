'use strict'

const UNAUTHORIZED_ERROR = {
  status: 401,
  code: '01',
  message: 'No autorizado'
}

const REQUEST_BODY_ERROR = {
  status: 400,
  code: '02',
  message: 'Cuerpo de la petición no definido'
}

const SERVER_ERROR = {
  status: 500,
  code: '03',
  message: 'Error del servidor'
}

const AUTH_BODY_ERROR = {
  status: 400,
  code: '04',
  message: 'Falta usuario o contraseña'
}

const AUTH_USERNAME_ERROR = {
  status: 400,
  code: '05',
  message: 'El nombre de usuario no se encuentra registrado'
}

const AUTH_PASSWORD_ERROR = {
  status: 400,
  code: '06',
  message: 'La contraseña no es correcta'
}

const AUTH_EMAIL_ERROR = {
  status: 400,
  code: '07',
  message: 'Email no registrado'
}

const HOUSING_EXISTS_ERROR = {
  status: 400,
  code: '08',
  message: 'La vivienda ya existe'
}

module.exports = {
  UNAUTHORIZED_ERROR,
  REQUEST_BODY_ERROR,
  SERVER_ERROR,
  AUTH_BODY_ERROR,
  AUTH_USERNAME_ERROR,
  AUTH_PASSWORD_ERROR,
  AUTH_EMAIL_ERROR,
  HOUSING_EXISTS_ERROR
}