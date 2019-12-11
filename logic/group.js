'use strict'

const Handle = require('../utils/handle')
const GroupModel = require('../models/group')()

const saveGroup = (req, res) => {
  try {
    GroupModel
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

const updateGroup = (req, res) => {
  try {
    const options = {
      where: {
        id_grupo: req.body.id_grupo
      }
    }

    GroupModel
      .findOne(options)
      .then(group => {
        if (!group)
          throw new Error('No registra grupo')
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

const getGroups = (req, res) => {
  try {
    const options = {
      raw: true
    }

    GroupModel
      .findAll(options)
      .then(groups => {
        return Handle.send(res, groups)
      })
      .catch(error => {
        return Handle.error(res, error)
      })

  } catch (error) {
    return Handle.error(res, error)
  }
}

const deleteGroup = (req, res) => {
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
  saveGroup,
  updateGroup,
  getGroups,
  deleteGroup
}