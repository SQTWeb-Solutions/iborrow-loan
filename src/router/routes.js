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
        { path: 'register/investor', name: 'auth.register.investors', component: require('@/pages/Auth/Register/Investors').default, meta: { layout: 'registration' } },
        { path: 'register/borrower', name: 'auth.register.borrowers', component: require('@/pages/Auth/Register/Borrowers').default, meta: { layout: 'registration' } },
        { path: 'register/error', name: 'auth.register.error', component: require('@/pages/Auth/Register/Error').default, meta: { layout: 'auth' } },
        { path: 'register/confirm/verified', name: 'auth.register.confirmation.error', component: require('@/pages/Auth/Register/ConfirmError').default, meta: { layout: 'auth' } },
        { path: 'register/success/:email', name: 'auth.register.success', component: require('@/pages/Auth/Register/Success').default, meta: { layout: 'auth' } },
        { path: 'register/confirm/:token', name: 'auth.register.confirm', component: require('@/pages/Auth/Register/Confirm').default, meta: { layout: 'auth' } },
        { path: 'password/forgot', name: 'auth.password.forgot', component: require('@/pages/Auth/Password/Forgot').default, meta: { layout: 'auth' } },
        { path: 'password/reset/:token', name: 'auth.password.reset', component: require('@/pages/Auth/Password/Reset').default, meta: { layout: 'auth' } },
        { path: 'create-account', name: 'auth.create.account', component: require('@/pages/Auth/CreateAccount').default, meta: { layout: 'register' } }
      ]
    }
  ]),

  // Route middleware for authentication. This ensures the user is logged in no matter what
  ...middleware('auth', [
    { path: '/onboard',
      component: () => import('@/pages/Onboard/Template'),
      children: [
        { path: '', redirect: { name: 'onboard.page' } },
        { path: 'welcome', name: 'onboard.page', component: require('@/pages/Onboard/Onboard').default, meta: { layout: 'onboard' } }
      ]
    },
    // Route middleware to check if the user is an investors
    ...middleware('investors', [
      {
        path: '/in',
        component: () => import('@/pages/Investors/Template'),
        children: [
          { path: '', redirect: { name: 'investors.dashboard' } },
          { path: 'trending', name: 'investors.dashboard', component: require('@/pages/Investors/Dashboard/DashboardPage').default, meta: { layout: 'dashboard', title: 'Trending', sidebar: true } },
          { path: 'borrowers',
            component: () => import('@/pages/Investors/Template'),
            children: [
              { path: '', name: 'investors.borrowers', component: require('@/pages/Investors/Borrowers/BorrowersList').default, meta: { layout: 'dashboard', title: 'Borrowers' } },
              { path: 'request/featured', name: 'investors.borrowers.request.featured', component: require('@/pages/Investors/Borrowers/FeaturedRequestList').default, meta: { layout: 'dashboard', sidebar: false, title: 'Featured Borrowers' } },
              { path: 'transactions', name: 'investors.borrowers.transactions', component: require('@/pages/Investors/Borrowers/Transactions').default, meta: { layout: 'dashboard', sidebar: false, title: 'Active Transactions' } },
              { path: 'activities', name: 'investors.borrowers.activities', component: require('@/pages/Investors/Borrowers/Activities').default, meta: { layout: 'dashboard', sidebar: true, title: 'My Activities' } }
            ]
          },
          { path: 'investments',
            component: () => import('@/pages/Investors/Template'),
            children: [
              // TODO: Change the reidrect URL
              { path: '', redirect: { name: 'investors.investments.borrowers.requests' } },
              { path: 'requests', name: 'investors.investments.borrowers.requests', component: require('@/pages/Investors/Investments/Requests').default, meta: { layout: 'dashboard', sidebar: true, title: 'Borrowers Requests' } },
              { path: 'activites', name: 'investors.investments.borrowers.activities', component: require('@/pages/Investors/Investments/Activities').default, meta: { layout: 'dashboard', sidebar: true, title: 'My Activities' } }
            ]
          }
        ]
      }
    ]),
    // Route Middeware to check if the user is a borrower
    ...middleware('borrowers', [
      {
        path: '/br',
        component: () => import('@/pages/Borrowers/Template'),
        children: [
          { path: '', redirect: { name: 'borrowers.dashboard' } },
          { path: 'trending', name: 'borrowers.dashboard', component: require('@/pages/Borrowers/Dashboard/DashboardPage').default, meta: { layout: 'dashboard', sidebar: true, title: 'Trending' } },
          { path: 'investors',
            component: () => import('@/pages/Borrowers/Template'),
            children: [
              { path: '', name: 'borrowers.investors', component: require('@/pages/Borrowers/Investors/InvestorsList').default, meta: { layout: 'dashboard', sidebar: false, title: 'Investors' } },
              { path: 'request/featured', name: 'borrowers.investors.request.featured', component: require('@/pages/Borrowers/Investors/FeaturedRequestList').default, meta: { layout: 'dashboard', sidebar: false, title: 'Investors' } },
              { path: 'transactions', name: 'borrowers.investors.transactions', component: require('@/pages/Borrowers/Investors/Transactions').default, meta: { layout: 'dashboard', sidebar: false, title: 'Active Transactions' } },
              { path: 'activities', name: 'borrowers.investors.activities', component: require('@/pages/Borrowers/Investors/Activities').default, meta: { layout: 'dashboard', sidebar: true, title: 'My Activities' } }
            ]
          },
          { path: 'borrowings',
            component: () => import('@/pages/Borrowers/Borrowings/Template'),
            children: [
              // TODO: Change the reidrect URL
              { path: '', redirect: { name: 'borrowers.borrowings.investors.requests' } },
              { path: 'requests', name: 'borrowers.borrowings.investors.requests', component: require('@/pages/Borrowers/Borrowings/Requests').default, meta: { layout: 'dashboard', sidebar: true, title: 'Investors Requests' } },
              { path: 'activites', name: 'borrowers.borrowings.investors.activities', component: require('@/pages/Borrowers/Borrowings/Activities').default, meta: { layout: 'dashboard', sidebar: true, title: 'My Activities' } }
            ]
          }
        ]
      }
    ]),
    { path: '/profile/@:username', name: 'profile.member', component: require('@/pages/Profile/UserProfile').default, meta: { layout: 'dashboard', sidebar: false, title: 'Member Profile' } },
    { path: '/profile/me', name: 'profile', component: require('@/pages/Profile/ActiveUserProfile').default, meta: { layout: 'dashboard', sidebar: false, title: 'My Profile' } },
    { path: '/profile/edit/account', name: 'profile.edit', component: require('@/pages/Profile/EditProfile').default, meta: { layout: 'dashboard', sidebar: false, title: 'Edit Profile' } }
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
