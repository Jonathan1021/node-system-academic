'use strict'

const ENV = require('./env/development.json')

const app = require('./config/express')
const db = require('./config/db')

app.listen(ENV.app.port, () => {
  console.log(`Client running on: http://localhost:${ENV.app.port}`)
  db.setupDatabase()
})

module.exports = app