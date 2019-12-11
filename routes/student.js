'use strict'

const express = require('express')
const router = express.Router()
const studentLogic = require('../logic/student')

router
  .post('/student/save', studentLogic.saveStudent)

router
  .post('/student/update', studentLogic.updateStudent)

router
  .get('/student', studentLogic.getStudents)

router
  .get('/student/:id', studentLogic.getStudentById)

router
  .get('/student/subject/:id', studentLogic.getSubjectsByIdStudent)

router
  .get('/knn/student', studentLogic.getStudentKnn)

router
  .post('/student/delete', studentLogic.deleteStudent)

module.exports = router