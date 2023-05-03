'use strict'
const Playlist = use('App/Models/Playlist');
const Song = use('App/Models/Song');
const AuthorizationService = use('App/Services/AuthorizationService');

class SongController {
    async index({auth, params}) {
        const user = await auth.getUser(); //fetch user associated with JWT
        const {id} = params; //get playlist id
        const playlist = await Playlist.find(id); //find playlist
        AuthorizationService.verifyPermission(playlist, user);
        //console.log(user.id)
        return await playlist.songs().fetch()
    }

    async create({auth, request, params}) {
        const user = await auth.getUser(); //check user (token)
        const { artist, name } = request.all(); //get description from request.body
        const {id} = params; //get playlist id
        const playlist = await Playlist.find(id); //find playlist
        AuthorizationService.verifyPermission(playlist, user); //check permissions
        const song = new Song(); //create Song from our Lucid Instance
        song.fill({
            artist, name
        });
        await playlist.songs().save(song); //save song to playlist
        return song;
    }

    async destroy({auth, params}) {
        const user = await auth.getUser(); //fetch user
        const {id} = params; //get task id
        const song = await Song.find(id) //fetch corresponding song.id
        const playlist = await song.playlist().fetch() //get playlist
        AuthorizationService.verifyPermission(playlist, user); //if play doesn't belong to the user or play doesnt exist
        await song.delete();
        return song;
    }

    async update({auth, params, request}) {
        const user = await auth.getUser(); //fetch user
        const {id} = params; //get song id
        const song = await Song.find(id) //fetch corresponding song
        const playlist = await song.playlist().fetch() //get play
        AuthorizationService.verifyPermission(playlist, user); //if play doesn't belong to the user or play doesnt exist
        song.merge(request.only('artist', 'name', 'listened'));
        await song.save()
        return song;
    }
}

module.exports = SongController
