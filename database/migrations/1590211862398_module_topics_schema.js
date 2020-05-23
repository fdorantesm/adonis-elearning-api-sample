'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const entities = require('../entities')

class ModuleTopicsSchema extends Schema {
  async up () {
    // const tableExists = await this.hasTable(entities.moduleTopic)
    // !tableExists && this.create(entities.moduleTopic, (table) => {
    //   table.increments()
    //   table.uuid(entities.keys.privateId)
    //   table.string('title', 64).notNullable()
    //   table.string('descripton', 256).notNullable()
    //   table.integer('module_id').unsigned().references(entities.keys.primaryKey).inTable(entities.module).onUpdate(entities.events.cascade).onDelete(entities.events.cascade)
    //   table.integer('topic_id').unsigned().references(entities.keys.primaryKey).inTable(entities.topic).onUpdate(entities.events.cascade).onDelete(entities.events.cascade)
    //   table.boolean(entities.keys.enabled).defaultTo(entities.defaults.enabled)
    //   table.timestamps()
    // })
  }

  async down () {
    // await this.hasTable(entities.moduleTopic) && this.drop(entities.moduleTopic)
  }
}

module.exports = ModuleTopicsSchema
