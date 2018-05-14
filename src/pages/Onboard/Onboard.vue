<template>
  <div>
      <div class="row u-justify-center">
        <div class="col-lg-6 u-text-center" v-if="loading">
            <h2 class="u-mb-small">Hello {{user.firstName}}, Welcome to iBorrow :)</h2>
            <p class="u-text-large u-mb-large">Start using iBorrow by exploring features included, we built a complete documentation just for you to help get up and running as quickly as possible.</p>
        </div>
        <div class="col-lg-6 u-text-center mb-5" v-else>
            <content-placeholders :rounded="true">
                <content-placeholders-heading />
            </content-placeholders>
        </div>
      </div>

      <div class="row" v-if="loading">
        <div class="col-md-6 col-xl-4 u-ml-auto">
            <div class="c-card is-animated">
                <span class="c-icon c-icon--large u-mb-small">
                <i class="feather icon-home"></i>
                </span>

                <h5 class="u-mb-xsmall">Explore Your Dashboard</h5>
                <p class="u-mb-medium">Start getting familar with yur dashboard and explore all options we have just for you.</p>
                <a class="c-btn c-btn--info has-arrow" href="/in" v-if="userType === 'investors' ">
                Explore<i class="feather icon-chevron-right"></i>
                </a>
                <a class="c-btn c-btn--info has-arrow" href="/br" v-else>
                Explore<i class="feather icon-chevron-right"></i>
                </a>
            </div>
        </div>

        <div class="col-md-6 col-xl-4 u-mr-auto">
            <div class="c-card is-animated">
                <span class="c-icon c-icon--large u-mb-small">
                <i class="feather icon-globe"></i>
                </span>

                <h5 class="u-mb-xsmall">Explore Business Section</h5>
                <p class="u-mb-medium">iBorrow business section is created to connect you potential business investors or invest in business</p>
                <a class="c-btn c-btn--info has-arrow" href="/">Explore Businesses<i class="feather icon-chevron-right"></i></a>
            </div>
        </div>
      </div>

      <div class="row" v-else>
          <div class="col-md-6 col-xl-4 u-ml-auto">
            <div class="c-card is-animated">
                <content-placeholders>
                <content-placeholders-heading :img="true" />
                <content-placeholders-text :lines="3" />
                </content-placeholders>
            </div>
        </div>
        <div class="col-md-6 col-xl-4 u-mr-auto">
            <div class="c-card is-animated">
                <content-placeholders>
                <content-placeholders-heading :img="true" />
                <content-placeholders-text :lines="3" />
                </content-placeholders>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'onboard-page',
  data () {
    return {
      user: [],
      loading: false,
      userType: null
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    async getUser () {
      // Dispatch an action to fetch the user information in case it doesn't exist before
      await this.$store.dispatch('auth/fetchUser')
      this.user = this.$store.getters['auth/user']
      this.userType = this.user.roles
      this.loading = true

      await this.$store.dispatch('auth/updateOnboard')
    }
  }
}
</script>
