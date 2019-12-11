'use strict'

const express = require('express')
const router = express.Router()
const GroupAndStudentLogic = require('../logic/group-student')

router
  .post('/group-student/save', GroupAndStudentLogic.saveGroupAndStudent)

router
  .post('/group-student/update', GroupAndStudentLogic.updateGroupAndStudent)

router
  .get('/group-student', GroupAndStudentLogic.getGroupAndStudents)

router
  .post('/group-student/delete', GroupAndStudentLogic.deleteGroupAndStudent)

module.exports = router