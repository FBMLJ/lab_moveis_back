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

// user not login
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.post('/users/sign_up','UserController.create')
Route.post('/users/sign_in', 'SessionController.create')

//user login
// check user is logged
// Route.get('/app/hi', () => {message: "oi"}).middleware(['auth'])