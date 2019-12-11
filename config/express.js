'use strict'

const express = require('express')
const helmet = require('helmet')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const winston = require('./winston')



/* Rutas API */
const GroupRoutes = require('../routes/group')
const StudentRoutes = require('../routes/student')
const SubjectRoutes = require('../routes/subject')
const TeacherRoutes = require('../routes/teacher')
const GroupAndStudentRoutes = require('../routes/group-student')

/** Politicas de seguridad */
app.use(cors())
app.use(helmet())

/* Configuración de body-parser */
app.use(bodyParser.json())

/* Configuración de rutas */
app.use('/api', GroupRoutes)
app.use('/api', StudentRoutes)
app.use('/api', SubjectRoutes)
app.use('/api', TeacherRoutes)
app.use('/api', GroupAndStudentRoutes)

module.exports = app