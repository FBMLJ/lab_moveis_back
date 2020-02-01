'use strict'

class SessionController {
  async create ({ request, auth }) { 
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }

  async isUser ({response,request, auth}, next){
    
    
    const isLoggedIn =  await auth.check() 
      
      
    
    
    if (!isLoggedIn)
      return response.unauthorized({message: "Você deve estar logado para continuar"})
    
    

  }
}

module.exports = SessionController