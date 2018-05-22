<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <div class="o-page">
        <header class="c-navbar u-mb-large">
          <a class="c-navbar__brand" :href="websiteUrl">
            <img src="@/assets/img/logo_30px.png" alt="iBorrow Logo" title="iBorrow Logo" style="max-height:40px;">
          </a>
          <div class="c-dropdown dropdown u-ml-auto">
            <div class="dropdown-toggle" id="dropdownMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
              <i class="c-notification__icon feather icon-menu"></i>
            </div>

            <div class="c-dropdown__menu has-arrow dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAvatar">
              <router-link :to="{name: 'auth.login'}" tag="a" class="c-dropdown__item dropdown-item" >Proceed to Login</router-link>
              <a class="c-dropdown__item dropdown-item" :href="websiteUrl">Back to Website</a>
            </div>
          </div>
        </header>
        <div class="container">
          <router-view/>
          <div class="row">
            <div class="col-12">
              <footer class="c-footer">
                <p class="mb-0">©  {{ new Date().getFullYear() }} © iBorrow Corporation. All rights reserved.</p>
                <span class="c-footer__divider">|</span>
                <nav>
                  <a class="c-footer__link" :href="websiteUrl">Terms</a>
                  <a class="c-footer__link" :href="websiteUrl">Policy</a>
                  <a class="c-footer__link" :href="websiteUrl">FAQ</a>
                  <a class="c-footer__link" :href="websiteUrl">Help</a>
                </nav>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: 'registration',
  data () {
    return {
      websiteUrl: process.env.VUE_APP_WEBSITE_URL
    }
  },
  metaInfo () {
    return {
      title: 'Create Account',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'login-page' },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>
