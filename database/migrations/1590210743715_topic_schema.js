'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const entities = require('../entities')

class TopicSchema extends Schema {
  async up () {
    const tableExists = await this.hasTable(entities.topic)
    !tableExists && this.create(entities.topic, (table) => {
      table.increments()
      table.uuid(entities.keys.privateId)
      table.string('title', 64).notNullable()
      table.string('description', 256).notNullable()
      table.text('content')
      table.integer('module_id').unsigned().references(entities.keys.primaryKey).inTable(entities.module).onUpdate(entities.events.cascade).onDelete(entities.events.cascade)
      table.boolean(entities.keys.enabled).defaultTo(entities.defaults.enabled)
      table.timestamps()
    })
  }

  async down () {
    await this.hasTable(entities.topic) && this.drop(entities.topic)
  }
}

module.exports = TopicSchema
