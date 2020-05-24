'use strict'

const uuid = require('uuid')

class Uuid {
  register (Model, customOptions = {}) {
    const defaultOptions = {}
    const options = Object.assign(defaultOptions, customOptions)
    Model.addHook('beforeCreate', function (modelInstance) {
      modelInstance._id = uuid.v4()
      return modelInstance
    })
  }
}

module.exports = Uuid
