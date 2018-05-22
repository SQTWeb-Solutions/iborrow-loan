<template>
  <div class="o-page o-page--center">
    <div class="o-page__card">
      <div class="c-card c-card--center">
        <a :href="websiteUrl" class="c-icon c-icon--large u-mb-small">
          <img src="@/assets/img/logo.png" alt="iBorrrow">
        </a>

        <h4 class="u-mb-medium">Welcome Back :)</h4>
        <login-form></login-form>
        <hr />
        <router-link :to="{ name: 'auth.create.account' }" class="btn-link" >Not yet a member? Create an acount</router-link>
      </div>
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
