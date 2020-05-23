'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const entities = require('../entities')

class TokensSchema extends Schema {
  async up () {
    const tableExists = await this.hasTable(entities.category)
    !tableExists && this.create(entities.token, (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable(entities.user)
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  async down () {
    await this.hasTable(entities.token) && this.drop(entities.token)
  }
}

module.exports = TokensSchema
