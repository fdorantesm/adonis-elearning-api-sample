'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const entities = require('../entities')

class ModuleSchema extends Schema {
  async up () {
    const tableExists = await this.hasTable(entities.module)
    !tableExists && this.create(entities.module, (table) => {
      table.increments()
      table.uuid(entities.keys.privateId)
      table.string('title', 64)
      table.integer('course_id').unsigned().references(entities.keys.primaryKey).inTable(entities.course).onDelete(entities.events.cascade).onUpdate(entities.events.cascade)
      table.boolean(entities.keys.enabled).defaultTo(entities.defaults.enabled)
      table.timestamps()
      table.date(entities.keys.deleted).defaultTo(null)
    })
  }

  async down () {
    await this.hasTable(entities.module) && this.drop(entities.module)
  }
}

module.exports = ModuleSchema
