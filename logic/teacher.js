'use strict'

const Handle = require('../utils/handle')
const TeacherModel = require('../models/teacher')()
const db = require('../config/db')

const sequelize = db.setupDatabase()

const saveTeacher = (req, res) => {
  try {
    TeacherModel
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

const updateTeacher = (req, res) => {
  try {
    const options = {
      where: {
        id_profesor: req.body.id_profesor
      }
    }

    TeacherModel
      .findOne(options)
      .then(teacher => {
        if (!teacher)
          throw new Error('No registra profesor')
        return teacher.update(req.body)
      })
      .then(updateTeacher => {
        return Handle.send(res, updateTeacher)
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}

const getTeachers = (req, res) => {
  try {
    const options = {
      raw: true
    }

    TeacherModel
      .findAll(options)
      .then(teachers => {
        return Handle.send(res, teachers)
      })
      .catch(error => {
        return Handle.error(res, error)
      })

  } catch (error) {
    return Handle.error(res, error)
  }
}

const getSubjectsByIdTeacher = (req, res) => {
  try {
    const query = `
    SELECT 
       a.nombre,
       a.creditos,
       g.id_grupo
    FROM   profesor p 
       INNER JOIN grupo g 
          ON p.id_profesor = g.id_profesor 
       INNER JOIN asignatura a 
          ON a.id_asignatura = g.id_asignatura 
    WHERE  p.id_profesor = :idTeacher`

    let options = {
      replacements: {
        idTeacher: req.params.id
      },
      type: sequelize.QueryTypes.SELECT
    }

    sequelize
      .query(query, options)
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

const deleteTeacher = (req, res) => {
  try {
    const variables = {
      user: req.body
    }

    return Handle.send(res, req.body)

  } catch (error) {
    return Handle.error(res, error)
  }
}

const getTeacherById = (req, res) => {
  try {
    const options = {
      raw: true,
      where: {
        id_profesor: req.params.id
      }
    }

    TeacherModel
      .findAll(options)
      .then(teachers => {
        return Handle.send(res, teachers.length > 0 ? teachers[0]: {})
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}

module.exports = {
  getTeacherById,
  saveTeacher,
  updateTeacher,
  getTeachers,
  getSubjectsByIdTeacher,
  deleteTeacher
}