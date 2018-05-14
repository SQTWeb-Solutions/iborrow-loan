import store from '@/store'
// The middleware will check the user type that logged in, if the user is an investors it will allow the user to continue to the route else log
// Log the user and destroy the cookie and token
// The middleware will check if the logged in user is a lender or a borrower
export default async (to, from, next) => {
  const roles = store.getters['auth/roles']
  const onboardStatus = store.getters['auth/onboard']
  if (roles !== 'investors') {
    next({ name: 'auth.login' })
  } else {
    // check if the user has already passed the onbord status page
    if (!onboardStatus || onboardStatus === 'false') {
      next({ name: 'onboard.page' })
    } else {
      next()
    }
  }
}
