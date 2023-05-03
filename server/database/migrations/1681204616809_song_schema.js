'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SongSchema extends Schema {
  up () {
    this.create('songs', (table) => {
      table.increments()
      table.string('artist', 255)
      table.string('name', 255)//.notNullable().unique()
      table.boolean('listened')
      table.integer('playlist_id').unsigned().references('id').inTable('playlists') //belongs to playlist.id - reference
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = SongSchema
