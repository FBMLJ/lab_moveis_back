"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["name", "email", "password"])
    
    const valid = await User.findBy("email", data.email)
    if (!valid)
      return User.create(data)
      
    else
      return valid
  }
}

module.exports = UserController
