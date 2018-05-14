<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <div class="o-page">
        <onboard-header></onboard-header>
        <div class="container">
          <router-view/>
          <main-footer></main-footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
import OnboardHeader from '@/components/OnboardHeader'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'onboard',
  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'Welcome Aboard',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'login-page' },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading,
    OnboardHeader,
    MainFooter
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>
