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
      table.integer('course_id').unsigned().references('id').inTable(entities.course).onDelete(entities.events.cascade).onUpdate(entities.events.cascade)
      table.boolean('is_enabled').defaultTo(entities.defaults.enabled)
      table.timestamps()
    })
  }

  async down () {
    await this.hasTable(entities.module) && this.drop(entities.module)
  }
}

module.exports = ModuleSchema
