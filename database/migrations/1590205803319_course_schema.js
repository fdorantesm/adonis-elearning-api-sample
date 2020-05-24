'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const entities = require('../entities')

class CourseSchema extends Schema {
  async up () {
    const tableExists = await this.hasTable(entities.course)
    !tableExists && this.create(entities.course, (table) => {
      table.increments()
      table.uuid(entities.keys.privateId)
      table.string('title', 64).notNullable()
      table.integer('category_id').unsigned().references(entities.keys.primaryKey).inTable(entities.category).onDelete(entities.events.cascade).onUpdate(entities.events.cascade)
      table.integer('user_id').unsigned().references(entities.keys.primaryKey).inTable(entities.user).onDelete(entities.events.cascade).onUpdate(entities.events.cascade)
      table.boolean(entities.keys.enabled).defaultTo(entities.defaults.enabled)
      table.timestamps()
      table.date(entities.keys.deleted).defaultTo(null)
    })
  }

  async down () {
    await this.hasTable(entities.course) && this.drop(entities.course)
  }
}

module.exports = CourseSchema
