'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  static boot () {
    super.boot()
    this.addTrait('SoftDelete')
    this.addTrait('Uuid')
  }
  courses() {
    return this.hasMany('App/Models/Course')
  }  
}

module.exports = Category
