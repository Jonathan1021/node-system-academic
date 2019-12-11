'use strict'

const express = require('express')
const router = express.Router()
const subjectLogic = require('../logic/subject')

router
  .post('/subject/save', subjectLogic.saveSubject)

router
  .post('/subject/update', subjectLogic.updateSubject)

router
  .get('/subject', subjectLogic.getSubjects)

router
  .post('/subject/delete', subjectLogic.deleteSubject)

module.exports = router