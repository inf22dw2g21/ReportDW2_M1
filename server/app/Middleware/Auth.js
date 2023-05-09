'use strict'

class Auth {
  async handle({ request, response }, next) {
    const authHeader = request.header('Authorization')

    if (!authHeader) {
      return response.status(401).send('Unauthorized')
    }

    const [, token] = authHeader.split(' ')

    // Validate token and perform the necessary operations.
    // You should replace this comment with your token validation logic.
    // If the token is invalid, return a 401 Unauthorized response.

    await next()
  }
}

module.exports = Auth
