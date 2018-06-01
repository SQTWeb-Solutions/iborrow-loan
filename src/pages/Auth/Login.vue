<template>
  <div class="c-card u-mb-xsmall">
    <header class="c-card__header u-pt-large">
      <a class="c-card__icon" href="/">
        <img src="@/assets/img/logo.png" alt="iBorrow">
      </a>
      <h1 class="u-h3 u-text-center u-mb-zero">Welcome back :).</h1>
    </header>
    <div class="c-card__body">
      <login-form></login-form>
      <span class="c-divider c-divider--small has-text u-mv-medium">Not yet a member?</span>
      <router-link tag="a" :to="{ name: 'auth.create.account' }" class="c-btn c-btn--secondary c-btn--fullwidth"> Create an acount</router-link>
    </div>
  </div>

</template>
<script>
import LoginForm from './LoginForm'
export default {
  name: 'login-page',
  data () {
    return {
      websiteUrl: process.env.VUE_APP_WEBSITE_URL
    }
  },
  components: {
    LoginForm
  },
  metaInfo () {
    return {
      title: 'Login'
    }
  }
}
</script>
