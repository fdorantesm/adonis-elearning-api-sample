'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const entities = require('../entities')

class UserSchema extends Schema {
  async up () {
    const tableExists = await this.hasTable(entities.category)
    !tableExists && this.create(entities.user, (table) => {
      table.increments()
      table.uuid(entities.keys.privateId)
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
      table.date(entities.keys.deleted).defaultTo(null)
    })
  }

  async down () {
    await this.hasTable(entities.user) && this.drop(entities.user)
  }
}

module.exports = UserSchema
