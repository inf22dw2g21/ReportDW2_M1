'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('auth/register', "UserController.register");
  Route.post('auth/login', "UserController.login");
  Route.get('playlists', "PlaylistController.index").middleware('auth'); //middleware will use the USER JWT
  Route.post('playlists', "PlaylistController.create").middleware('auth');
  Route.get('playlists/:id', "PlaylistController.show").middleware('auth'); //retificar para controller get by id
  Route.delete('playlists/:id', "PlaylistController.destroy").middleware('auth');
  Route.patch('playlists/:id', "PlaylistController.update").middleware('auth');

  Route.get('playlists/:id/songs', "SongController.index").middleware('auth');
  Route.post('playlists/:id/songs', "SongController.create").middleware('auth');
  Route.delete('songs/:id', "SongController.destroy").middleware('auth');
  Route.patch('songs/:id', "SongController.update").middleware('auth');
}).prefix('api'); //prefix localhost/api/...

