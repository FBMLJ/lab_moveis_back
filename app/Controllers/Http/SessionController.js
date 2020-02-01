'use strict'

class SessionController {
  async create ({ request, auth }) { 
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }

  async isUser ({auth}){
    try {
      const user = await auth.getUser() 
      return user
    }
    
    catch (error){
      return {message: "You need sign_in"}
    }
    

  }
}

module.exports = SessionController