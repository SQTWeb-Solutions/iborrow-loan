<template>
<div class="c-dropdown dropdown">
    <div class="c-avatar c-avatar--xsmall dropdown-toggle" id="dropdownMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
        <img class="c-avatar__img" v-auth-image="profileImage" :alt="displayName" v-if="loading">
        <span class="c-avatar__name" v-else >QA</span>
    </div>

    <div class="c-dropdown__menu has-arrow dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAvatar">
        <router-link tag="a" :to="{ name: 'profile' }" class="c-dropdown__item dropdown-item" >My Profile</router-link>
        <a class="c-dropdown__item dropdown-item" href="#">View Activity</a>
        <a class="c-dropdown__item dropdown-item" href="#">Inbox</a>
        <a class="c-dropdown__item dropdown-item" href="#" @click.prevent="logoutUser">Log out</a>
    </div>
</div>
</template>

<script>
// TODO: Get the firstletter of the firstname and lastname to set as the display name ofor the user
export default {
  name: 'account-overview',
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
