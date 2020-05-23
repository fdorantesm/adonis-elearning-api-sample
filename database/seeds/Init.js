'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Hash = use('Hash')
const entities = require('../entities')
const factories = require('../factories')

class InitSeeder {
  async run () {
    const users = await Database.table(entities.user)
    const categories = await Database.table(entities.category)
    const courses = await Database.table(entities.course)
    const modules = await Database.table(entities.module)
    const topics = await Database.table(entities.topic)
    if (users.length === 0) {
      await Database.table(entities.user).insert(factories.users)
    }
    if (categories.length === 0) {
      await Database.table(entities.category).insert(factories.categories)
    }
    if (courses.length === 0) {
      await Database.table(entities.course).insert(factories.courses)
    }
    if (modules.length === 0) {
      await Database.table(entities.module).insert(factories.modules)
    }
    if (topics.length === 0) {
      await Database.table(entities.topic).insert(factories.topics)
    }
  }
  async down () {
    await Database.table(entities.module).truncate()
    await Database.table(entities.topic).truncate()
    await Database.table(entities.course).truncate()
    await Database.table(entities.category).truncate()
    await Database.table(entities.user).truncate()
  }
}

module.exports = InitSeeder
