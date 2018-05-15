import Vue from 'vue'
import store from './store/index'
import router from './router/index'

// set up extend layout option for the vue
import { VueExtendLayout, layout } from 'vue-extend-layout'
import VeeValidate from 'vee-validate'
// Import Vue Tastr plugin for notification
import Toastr from 'vue-toastr'
import VueAuthImage from 'vue-auth-image'
import VueContentPlaceholders from 'vue-content-placeholders'

// Expose all the resources/plugins
import './resources'

import 'bootstrap/scss/bootstrap.scss'
import 'vue-toastr/src/vue-toastr.scss'
import '@/assets/scss/neat.scss'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, solid)

require('bootstrap')

Vue.config.productionTip = false
Vue.use(VueAuthImage)
Vue.use(VueExtendLayout)
Vue.use(VeeValidate)
Vue.use(Toastr)
Vue.use(VueContentPlaceholders)

Vue.component('vue-toastr', Toastr)

new Vue({
  store,
  router,
  ...layout
}).$mount('#app')
