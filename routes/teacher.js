'use strict'

const express = require('express')
const router = express.Router()
const teacherLogic = require('../logic/teacher')

router
  .post('/teacher/save', teacherLogic.saveTeacher)

router
  .post('/teacher/update', teacherLogic.updateTeacher)

router
  .get('/teacher', teacherLogic.getTeachers)

router
  .get('/teacher/:id/subject', teacherLogic.getSubjectsByIdTeacher)

router
  .get('/teacher/:id', teacherLogic.getTeacherById)

router
  .post('/teacher/delete', teacherLogic.deleteTeacher)

module.exports = router