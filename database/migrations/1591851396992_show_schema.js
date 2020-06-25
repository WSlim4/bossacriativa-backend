'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShowSchema extends Schema {
  up () {
    this.create('shows', (table) => {
      table.increments()
      table.string('name')
      table.string('artist')
      table.string('introduction')
      table.string('category')
      table.string('description')
      table.string('theme_color')
      table.timestamps()
    })
  }

  down () {
    this.drop('shows')
  }
}

module.exports = ShowSchema
