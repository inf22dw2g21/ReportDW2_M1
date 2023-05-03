'use strict'
const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class AuthorizationService {
    verifyPermission(resource, user) {
        if(!resource){
            throw new ResourceNotExistException.handle();
        }
        if(resource.user_id !== user.id) { //if project doesn't belong to the user
            throw new InvalidAccessException.handle();
        }
    }
}

module.exports = new AuthorizationService();