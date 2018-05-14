<template>
    <header class="c-navbar u-mb-large">
        <a class="c-navbar__brand" href="/">
            <img src="@/assets/img/logo_30px.png" alt="iBorrow Logo" title="iBorrow Logo" style="max-height:40px;">
        </a>
        <div class="c-dropdown dropdown u-ml-auto">
            <div class="c-avatar c-avatar--xsmall dropdown-toggle" id="dropdownMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
              <img class="c-avatar__img" v-auth-image="profileImage" :alt="displayName" v-if="loading">
              <span class="c-avatar__name" v-else >QA</span>
            </div>

            <div class="c-dropdown__menu has-arrow dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAvatar">
              <a class="c-dropdown__item dropdown-item" href="#" @click.prevent="logoutUser">Log out</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'onboard-page-header',
  data () {
    return {
      loading: false,
      profileImage: null,
      displayName: null
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    async getUser () {
      // Dispatch an action to fetch the user information in case it doesn't exist before
      await this.$store.dispatch('auth/fetchUser')
      this.displayName = this.$store.getters['auth/user'].displayName
      this.profileImage = `${process.env.API_URL}/${this.$store.getters['auth/user'].profileImageURL}`
      this.loading = true
    },
    //  Logout the user from the application
    async logoutUser (e) {
      e.preventDefault()
      try {
        this.$toastr.s('Logging out now')
        await this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'landing-page' })
      } catch (err) {
        this.$toastr.e(err.response.data.message)
      }
    }
  }
}
</script>
