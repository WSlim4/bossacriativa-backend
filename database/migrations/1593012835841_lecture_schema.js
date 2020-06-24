'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LectureSchema extends Schema {
  up () {
    this.create('lectures', (table) => {
      table.increments()
      table.string('name')
      table.string('speaker')
      table.string('description')
      table.string('category')
      table.string('theme_color')
      table.string('introduction')
      table.timestamps()
    })
  }

  down () {
    this.drop('lectures')
  }
}

module.exports = LectureSchema
