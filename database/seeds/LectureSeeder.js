'use strict'

const Factory = use('Factory')

class LectureSeeder {
    async run () {
        const lecture = await Factory
          .model('App/Models/Lecture')
          .createMany(16)
      }
}

module.exports = LectureSeeder
