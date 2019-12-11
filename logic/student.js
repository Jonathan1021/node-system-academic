'use strict'

const Handle = require('../utils/handle')
const StudentModel = require('../models/student')()
const db = require('../config/db')

const sequelize = db.setupDatabase()

const saveStudent = (req, res) => {
  try {
    StudentModel
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

const getStudentKnn = (req, res) => {
  try {
    const params = req.query
    const options = {
      raw: true
    }

    StudentModel
      .findAll(options)
      .then(students => {
        return getKnns(students, params)
      })
      .then(Knns => {
        console.log('Knns :', Knns);
        return Handle.send(res, Knns)
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}


const getSubjectsByIdStudent = (req, res) => {
  try {
    const query = `
    SELECT e.nombre,
      a.nombre,
      a.creditos,
      g.id_grupo
    FROM   estudiante e 
    INNER JOIN estudiante_grupo eg 
        ON e.id_estudiante = eg.id_estudiante 
    INNER JOIN grupo g 
        ON g.id_grupo = eg.id_grupo
    INNER JOIN asignatura a 
        ON a.id_asignatura = g.id_asignatura
    WHERE  e.id_estudiante = :idStudent`

    let options = {
      replacements: {
        idStudent: req.params.id
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

const updateStudent = (req, res) => {
  try {
    const options = {
      where: {
        id_estudiante: req.body.id_estudiante
      }
    }

    StudentModel
      .findOne(options)
      .then(student => {
        if (!student)
          throw new Error('No registra usuario')
        return student.update(req.body)
      })
      .then(updateStudent => {
        return Handle.send(res, updateStudent)
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}

const getStudents = (req, res) => {
  try {
    const options = {
      raw: true
    }

    StudentModel
      .findAll(options)
      .then(students => {
        return Handle.send(res, students)
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}

const getStudentById = (req, res) => {
  try {
    const options = {
      raw: true,
      where: {
        id_estudiante: req.params.id
      }
    }

    StudentModel
      .findAll(options)
      .then(students => {
        return Handle.send(res, students.length > 0 ? students[0] : {})
      })
      .catch(error => {
        return Handle.error(res, error)
      })
  } catch (error) {
    return Handle.error(res, error)
  }
}

const deleteStudent = (req, res) => {
  try {
    const variables = {
      user: req.body
    }

    return Handle.send(res, variables)

  } catch (error) {
    return Handle.error(res, error)
  }
}

const getKnns = (students, params) => {
  console.log('params :', params);
  let studentsKnns = []
  let lat = Number(params.lat)
  let long = Number(params.lon)
  let studentsKm = Number(params.km)
  for (const student of students) {
    let km = getKilometros(lat, long, student.latitud, student.longitud)
    
    if ((studentsKm > km) && (km > 0)) {
      console.log('km :', km);
      student.longitud = Number(student.longitud)
      student.latitud = Number(student.latitud)
      student.kms = Number(km)
      studentsKnns.push(student);
    }
  }
  return studentsKnns
}

const getKilometros = (lat1, lon1, lat2, lon2) => {
  let rad = (x) => {
    return x * Math.PI / 180;
  }
  var R = 6378.137; //Radio de la tierra en km
  var dLat = rad(lat2 - lat1);
  var dLong = rad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d.toFixed(3); //Retorna tres decimales
}

module.exports = {
  saveStudent,
  updateStudent,
  getStudents,
  getSubjectsByIdStudent,
  deleteStudent,
  getStudentById,
  getStudentKnn
}