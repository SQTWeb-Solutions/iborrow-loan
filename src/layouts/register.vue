<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <auth-header></auth-header>
      <router-view/>
      <auth-footer></auth-footer>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
import AuthFooter from '@/components/Footer'
import AuthHeader from '@/components/AuthHeader'
export default {
  name: 'register',

  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'Create Account',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'register-page login-page' },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading,
    AuthFooter,
    AuthHeader
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>
