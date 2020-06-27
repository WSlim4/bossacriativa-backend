'use strict'

const Factory = use('Factory')

class WorkshopSeeder {
  async run () {
    const workshop = await Factory
      .model('App/Models/Workshop')
      .createMany(16)
  }
}

module.exports = WorkshopSeeder
