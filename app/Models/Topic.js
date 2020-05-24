'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Topic extends Model {
  static boot () {
    super.boot()
    this.addTrait('SoftDelete')
    this.addTrait('Uuid')
  }
  module () {
    return this.belongsTo('App/Model/Module')
  }
}

module.exports = Topic
