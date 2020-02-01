"use strict"

const User = use("App/Models/User")
const { validate } = use('Validator')
class UserController {
  async create ({ request }) {
    const data = request.only(["name", "email", "password"])
    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required|min:6'
    }
    const validation = await validate(data, rules)
    if (validation.fails())
      return validation.messages()
    
    else
      return await User.create(data)
  }
}

module.exports = UserController
