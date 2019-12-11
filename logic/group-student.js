'use strict'

const Handle = require('../utils/handle')
const GroupAndStudentModel = require('../models/group-student')()

const saveGroupAndStudent = (req, res) => {
  try {
    GroupAndStudentModel
      .create(req.body)
      .then(result => {
        return Handle.send(res, result.toJSON())
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}

const updateGroupAndStudent = (req, res) => {
  try {
    const options = {
      where: {
        id_grupo: req.body.id_grupo,
        id_estudiante: req.body.id_estudiante
      }
    }

    GroupAndStudentModel
      .findOne(options)
      .then(group => {
        if (!group)
          throw new Error('No registra identificador')
        return group.update(req.body)
      })
      .then(updateGroup => {
        return Handle.send(res, updateGroup)
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}

const getGroupAndStudents = (req, res) => {
  try {
    const options = {
      raw: true
    }

    GroupAndStudentModel
      .findAll(options)
      .then(result => {
        return Handle.send(res, result)
      })
      .catch(error => {
        return Handle.error(res, error)
      })

  } catch (error) {
    return Handle.error(res, error)
  }
}

const deleteGroupAndStudent = (req, res) => {
  try {
    const variables = {
      user: req.body
    }

    return Handle.send(res, req.body)

  } catch (error) {
    return Handle.error(res, error)
  }
}

module.exports = {
  saveGroupAndStudent,
  updateGroupAndStudent,
  getGroupAndStudents,
  deleteGroupAndStudent
}