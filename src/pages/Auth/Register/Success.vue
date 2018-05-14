<template>
  <div class="o-page o-page--center">
    <div class="o-page__card">
      <div class="c-card c-card--center">
        <span class="c-icon c-icon--large u-mb-small">
          <img src="@/assets/img/logo.png" alt="iBorrrow">
        </span>

        <h4 class="u-mb-medium">Registration Success :)</h4>
        <p class="text-left">Welcome {{user.firstName}}, You account on iBorrow has been successfuly created. You are now a member of iBorrow. However, In order to confirm your eligibility as member on iBorrow, we need to confirm your account.</p>
        <div class="c-note u-mb-small">
          <span class="c-note__icon">
          <i class="feather icon-info"></i>
          </span>

          <p>Check your email address ({{user.email}}) for instruction to activate your account.</p>
        </div>
        <p class="text-left mt-4 ">Happy Lending/Borrowing.</p>
      </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  name: 'registration-success-page',
  data () {
    return {
      user: []
    }
  },
  metaInfo () {
    return {
      title: 'Registration Success'
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
    async getUser () {
      try {
        const email = this.$route.params.email
        const { data } = await axios.get('/api/auth/check/' + email)
        if (data.status === 400) {
          this.$router.push({ name: 'auth.register.error' })
        }
        this.user = data.user
      } catch (e) {
        this.$router.push({ name: 'auth.register.error' })
      }
    }
  }
}
</script>
