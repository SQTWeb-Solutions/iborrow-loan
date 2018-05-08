// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'

// set up extend layout option for the vue
import { VueExtendLayout, layout } from './layouts/index'
import VeeValidate from 'vee-validate'
// Import Vue Tastr plugin for notification
import Toastr from 'vue-toastr'
import VueAuthImage from 'vue-auth-image'

// Expose all the resources/plugins
import './resources'

import '@/assets/scss/neat.scss'
import 'bootstrap/dist/css/bootstrap.css'

require('bootstrap')

Vue.config.productionTip = false
Vue.use(VueAuthImage)
Vue.use(VueExtendLayout)
Vue.use(VeeValidate)
Vue.use(Toastr)

Vue.component('vue-toastr', Toastr)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  ...layout,
  template: '<App/>'
})
