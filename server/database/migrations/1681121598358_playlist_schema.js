'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistSchema extends Schema {
  up () {
    this.create('playlists', (table) => {
      table.string('title', 255)//.notNullable().unique()
      table.integer('user_id').unsigned().references('id').inTable('users') //belongs to User.id - reference
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('playlists')
  }
}

module.exports = PlaylistSchema
