'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Course extends Model {
  static boot () {
    super.boot()
    this.addTrait('SoftDelete')
    this.addTrait('Uuid')
  }
  category () {
    return this.belongsTo('App/Models/Category')
  }
  modules () {
    return this.hasMany('App/Models/Module')
  }
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Course
