<template>
<div class="o-page__sidebar js-page-sidebar">
    <aside class="c-sidebar">
        <div class="c-sidebar__brand">
        <a href="/"><img src="@/assets/img/logo_30px.png" alt="iBorrow Logo" title="iBorrow Logo" style="max-height:40px;"></a>
        </div>
        <div class="c-sidebar__body">
            <navigations :componentFile="userNavigation" v-if="loading"></navigations>
            <div class="pl-3 pr-3" v-else>
                <content-placeholders :rounded="true">
                    <content-placeholders-heading />
                    <content-placeholders-text :lines="3" />
                    <content-placeholders-text :lines="4" />
                </content-placeholders>
            </div>
        </div>
        <a class="c-sidebar__footer" href="#" @click.prevent="logoutUser">
        Logout <i class="c-sidebar__footer-icon feather icon-power"></i>
        </a>
    </aside>
</div>
</template>

<script>
import Navigations from './Navigation/Navigation'
export default {
  name: 'sidebar',
  components: {
    Navigations
  },
  data () {
    return {
      user: [],
      loading: false,
      userNavigation: null
    }
  },
  created () {
    this.getUser()
  },
  methods: {
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
    },
    async getUser () {
      // Dispatch an action to fetch the user information in case it doesn't exist before
      await this.$store.dispatch('auth/fetchUser')
      this.user = this.$store.getters['auth/user']
      var userType = this.user.roles
      if (userType === 'investors') {
        this.userNavigation = 'Investors'
      } else {
        this.userNavigation = 'Borrowers'
      }
      this.loading = true

      await this.$store.dispatch('auth/updateOnboard')
    }
  }
}
</script>
