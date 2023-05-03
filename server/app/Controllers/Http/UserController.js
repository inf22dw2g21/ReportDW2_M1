'use strict'
const User = use('App/Models/User');



class UserController {

/**
  * @swagger
  * /api/hello:
  *   get:
  *     tags:
  *       - Test
  *     summary: Sample API
  *     parameters:
  *       - name: name
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  */

    async login ({request, auth}) { //auth comes from config/auth.js
        const {email, password} = request.all();
        const token = await auth.attempt(email, password)
        return token
    }

    async register({request}) {
        const {email, password} = request.all(); //BODY
        const user = await User.create({
            email,
            password,
            username: email,
        });
        return user;
    }
}

module.exports = UserController
