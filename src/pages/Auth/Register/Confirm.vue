<template>
  <div class="o-page o-page--center">
    <div class="o-page__card">
      <div class="c-card c-card--center">
        <span class="c-icon c-icon--large u-mb-small">
          <img src="@/assets/img/logo.png" alt="iBorrrow">
        </span>
        <div>
          <h4 class="u-mb-medium">Welcome back :)</h4>
          <p class="text-left">That's it, your account has been activated and you are now officially a member of iBorrow. You can proceed with your account now.</p>
          <p class="text-left mt-4 mb-4">Happy Lending/Borrowing.</p>
          <router-link :to="{ name: 'auth.login' }" class="c-btn c-btn--fullwidth c-btn--info">Click to login now</router-link>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  name: 'confirmation-page',
  metaInfo () {
    return {
      title: 'Account Verification'
    }
  },
  created () {
    // invoke the method to check for user
    this.getUser()
  },
  methods: {
    /** Check the newly registered user information using the userID params in the URL,
     * if you can get the user then show the user the page if not then take the user out of this page
     * */
    getUser () {
      const data = {
        token: this.$route.params.token
      }
      axios.post('/api/auth/activate', data).then((res) => {
        if (res.status === 400) {
          this.$router.push({ name: 'auth.register.confirmation.error' })
        }
      }).catch((e) => {
        this.$router.push({ name: 'auth.register.confirmation.error' })
      })
    }
  }
}
</script>
