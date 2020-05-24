'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Module extends Model {
  static boot () {
    super.boot()
    this.addTrait('SoftDelete')
    this.addTrait('Uuid')
  }
  topics () {
    return this.hasMany('App/Models/Topic')
  }
}

module.exports = Module
