import store from '@/store'
// The middleware will check if the user is logged in
export default async (to, from, next) => {
  if (!store.getters['auth/token']) {
    next({ name: 'auth.login' })
  } else {
    next()
  }
}
