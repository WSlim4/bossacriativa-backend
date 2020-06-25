'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lecture extends Model {
    lessons(){
        return this.hasMany('App/Models/Lesson')
    }
}

module.exports = Lecture
