'use strict'

const express = require('express')
const router = express.Router()
const groupLogic = require('../logic/group')

router
  .post('/group/save', groupLogic.saveGroup)

router
  .post('/group/update', groupLogic.updateGroup)

router
  .get('/group', groupLogic.getGroups)

router
  .post('/group/delete', groupLogic.deleteGroup)

module.exports = router