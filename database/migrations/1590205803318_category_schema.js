'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const entities = require('../entities')

class CategorySchema extends Schema {
  async up () {
    const tableExists = await this.hasTable(entities.category)
    !tableExists && this.create(entities.category, (table) => {
      table.increments()
      table.uuid(entities.keys.privateId)
      table.string('code', 32).notNullable().unique()
      table.string('name', 32).notNullable().unique()
      table.string('icon', 16).notNullable().unique()
      table.boolean(entities.keys.enabled).defaultTo(entities.defaults.enabled)
      table.timestamps()
      table.date(entities.keys.deleted).defaultTo(null)
    })
  }

  async down () {
    await this.hasTable(entities.category) && this.drop(entities.category)
  }
}

module.exports = CategorySchema
