'use strict'
const Playlist = use('App/Models/Playlist');
const AuthorizationService = use('App/Services/AuthorizationService');

class PlaylistController {
    async index({auth}) {
        const user = await auth.getUser(); //fetch user associated with JWT
        //console.log(user.id)
        return await user.playlists().fetch();
    }

    async create({auth, request}) {
        const user = await auth.getUser(); //check user (token)
        const { title } = request.all(); //get title from request.body
        const playlist = new Playlist(); //create Playlist from our Lucid Instance
        playlist.fill({
            title
        });
        await user.playlists().save(playlist); //save use project
        return playlist
    }

    async destroy({auth, params}) {
        const user = await auth.getUser(); //fetch user
        const {id} = params; //get playlist id choosen by the user
        const playlist = await Playlist.find(id) //fetch corresponding playlist.id
        AuthorizationService.verifyPermission(playlist, user); //if playlist doesn't belong to the user or playlist doesnt exist
        await playlist.delete();
        return playlist;
    }

    async update({auth, params, request}) {
        const user = await auth.getUser(); //fetch user
        const {id} = params; //get playlist id choosen by the user to update
        const playlist = await Playlist.find(id) //fetch corresponding laylistt.id
        AuthorizationService.verifyPermission(playlist, user); //if playlist doesn't belong to the user or playlist doesnt exist
        playlist.merge(request.only('title'));
        await playlist.save()
        return playlist;
    }

    //show by id
    async show({ auth, params }) {
        const user = await auth.getUser(); // fetch user
        const { id } = params; // get playlist id from the route parameter
        const playlist = await Playlist.find(id); // fetch the playlist by id
      
        // Verify if the fetched playlist belongs to the authenticated user
        AuthorizationService.verifyPermission(playlist, user);
      
        return playlist;
      }
}

module.exports = PlaylistController
