<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <router-view/>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: 'auth',

  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'Authentication',
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
