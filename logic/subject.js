'use strict'

const Handle = require('../utils/handle')
const SubjectModel = require('../models/subject')()

const saveSubject = (req, res) => {
  try {
    SubjectModel
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

const updateSubject = (req, res) => {
  try {
    const options = {
      where: {
        id_asignatura: req.body.id_asignatura
      }
    }

    SubjectModel
      .findOne(options)
      .then(subject => {
        if (!subject)
          throw new Error('No registra asignatura')
        return subject.update(req.body)
      })
      .then(updateSubject => {
        return Handle.send(res, updateSubject)
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}

const getSubjects = (req, res) => {
  try {
    const options = {
      raw: true
    }

    SubjectModel
      .findAll(options)
      .then(subjects => {
        return Handle.send(res, subjects)
      })
      .catch(error => {
        return Handle.error(res, error)
      })

  } catch (error) {
    return Handle.error(res, error)
  }
}

const deleteSubject = (req, res) => {
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
  saveSubject,
  updateSubject,
  getSubjects,
  deleteSubject
}