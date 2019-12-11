'use strict'

const moment = require('moment')
const CodeErrors = require('./error-codes')
const CodeSuccess = require('./success-codes')
const DEFAULT_STATUS = 200

const Handle = {
  /**
   * Envia respuesta por medio de handle Response
   * @param {Object} res type of HTTP response
   * @param {number} code Codigo de respuesta parametrizados
   * @param {Object} result Objeto Resultado de respuesta
   */
  send: (res, result) => {
    let handleMessage
    const date = moment().format('DD/MM/YYYY hh:mm:ss a')
    try {
      handleMessage = {
        status: result.status || CodeSuccess.SUCCESS.status,
        code: result.code || CodeSuccess.SUCCESS.code,
        message: result.message || CodeSuccess.SUCCESS.message,
        result: (result.response) ? result.response : result
      }
    } catch (error) {
      handleMessage = {
        error: true,
        status: CodeErrors.SERVER_ERROR.status,
        code: CodeErrors.SERVER_ERROR.code,
        message: error.toString() || CodeErrors.SERVER_ERROR.message
      }
    } finally {
      res.status(handleMessage.status ? handleMessage.status : DEFAULT_STATUS).send(handleMessage)
    }
  },
  /**
   * Envia respuesta por medio de handle Response
   * @param {Object} res type of HTTP response
   * @param {err} Error Exception Error
   */
  error: (res, err) => {
    let handleMessage
    const date = moment().format('DD/MM/YYYY hh:mm:ss a')
    try {
      handleMessage = {
        error: true,
        status: err.status || CodeErrors.SERVER_ERROR.status,
        code: err.code || CodeErrors.SERVER_ERROR.code,
        message: err.message || err.toString()
      }
    } catch (error) {
      handleMessage = {
        error: true,
        status: CodeErrors.SERVER_ERROR.status,
        code: CodeErrors.SERVER_ERROR.code,
        message: error.toString() || CodeErrors.SERVER_ERROR.message
      }
    } finally {
      res.status(handleMessage.status ? handleMessage.status : DEFAULT_STATUS).send(handleMessage)
    }
  }
}

module.exports = Handle