<template>
  <aside class="col-md-5 order-lg-2">
    <account-overview :loading="loadedUser" :userInfo="user" :profileImage="profileImage"></account-overview>
    <payment-information></payment-information>
  </aside>
</template>

<script>
// TODO: Add the payment information setting to the page and show each payment info the user has
import PaymentInformation from '@/components/Profile/PaymentInformation'
import AccountOverview from '@/components/Profile/AccountOverview'
export default {
  name: 'profile-information',
  data () {
    return {
      payoutMethod: false,
      user: [],
      loadedUser: false,
      profileImage: null
    }
  },
  components: {
    PaymentInformation,
    AccountOverview
  },
  created () {
    this.getUser()
  },
  methods: {
    async getUser () {
      // Dispatch an action to fetch the user information in case it doesn't exist before
      await this.$store.dispatch('auth/fetchUser')
      this.user = this.$store.getters['auth/user']
      this.profileImage = `${process.env.API_URL}/${this.$store.getters['auth/user'].profileImageURL}`
      this.loadedUser = true
    }
  }
}
</script>
