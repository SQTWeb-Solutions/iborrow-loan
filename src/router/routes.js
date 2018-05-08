/*
* This is a file to save all routs used by app, each routes is group accoridng the routes group and types
 */
export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('@/pages/Welcome/Page').default
  },
  // routes for authentication with the guest middleware to check if teh user is logged in or not
  ...middleware('guest', [
    { path: '/auth',
      component: () => import('@/pages/Auth/Template'),
      children: [
        { path: '', redirect: { name: 'auth.login' } },
        { path: 'login', name: 'auth.login', component: require('@/pages/Auth/Login').default, meta: { layout: 'auth' } },
        { path: 'register/investors', name: 'auth.register.investors', component: require('@/pages/Auth/Register/Investors').default, meta: { layout: 'registration' } },
        { path: 'register/borrowers', name: 'auth.register.borrowers', component: require('@/pages/Auth/Register/Borrowers').default, meta: { layout: 'registration' } },
        { path: 'create-account', name: 'auth.create.account', component: require('@/pages/Auth/CreateAccount').default, meta: { layout: 'register' } }
      ]
    }
  ]),
  {path: '*', component: () => import('@/pages/Error/NotFound')}
]

/**
 * @param  {String|Function} middleware
 * @param  {Array} routes
 * @return {Array}
 */
// eslint-disable-next-line
function middleware (middleware, routes) {
  routes.forEach(route =>
    (route.middleware || (route.middleware = [])).unshift(middleware)
  )

  return routes
}
