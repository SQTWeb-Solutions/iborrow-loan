<template>
<form method="post" @submit.prevent="login">
  <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasError">
    <strong>Error!</strong> <br />
    {{errorMessage}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="notVerified">
    <strong>Notice!</strong>
    <br />
    Your account is not verified, please check you email for verification link, if you can receive the link <a class="alert-link" @click.prevent="resendToken" href="#" >Click to resend token</a>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="success">
    <strong>Success!</strong>
    <br />
    {{successMessage}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="c-field u-mb-small">
    <label class="c-field__label" for="username">Email Address/username</label>
    <input class="c-input" :class="{ 'c-input--danger': errors.has('username') }" v-model="username"  name="username" v-validate="'required'" type="text" id="username" placeholder="clark@iborrow.com">
    <form-error :caption="errors.first('username')" v-if="errors.has('username')"></form-error>
  </div>

  <div class="c-field u-mb-small">
    <label class="c-field__label" for="password">Password</label>
    <input class="c-input " type="password" id="password" v-model="password"  name="password" v-validate="'required'" :class="{ 'c-input--danger': errors.has('password') }" placeholder="Numbers, Letters...">
    <form-error :caption="errors.first('password')" v-if="errors.has('password')"></form-error>
  </div>
  <router-link :to="{ name: 'auth.password.forgot' }" class="mb-2 d-flex">Forgot Password?</router-link>
  <button class="c-btn c-btn--fancy c-btn--fullwidth" type="submit" :disabled="loading"><font-awesome-icon icon="spinner" spin  v-if="loading" /> {{ loading ? 'Processing' : 'Sign in to Dashboard' }}</button>
</form>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import FormError from '@/components/FormError'
export default {
  name: 'login-form',
  components: {
    FormError,
    FontAwesomeIcon
  },
  data () {
    return {
      loading: false,
      username: null,
      password: null,
      errorMessage: null,
      hasError: false,
      notVerified: false,
      verificationId: null,
      success: false,
      successMessage: null
    }
  },
  methods: {
    login () {
      this.$validator.validateAll().then((result) => {
        this.loading = true
        this.hasError = false
        this.errorMessage = null
        if (result) {
          let data = {
            username: this.username,
            password: this.password
          }
          return axios.post('/api/auth/signin', data).then((res) => {
            if (res.status === 200) {
              this.loading = false
              // Save the token.
              this.$store.dispatch('auth/saveToken', {
                token: res.data.token,
                roles: res.data.roles,
                remember: true,
                onboard: res.data.onboard
              })

              // Fetch the user.
              this.$store.dispatch('auth/fetchUser')

              // Redirect home.
              this.$router.push({ name: 'landing-page' })
            } else {
              console.log(res.status)
              this.hasError = true
              this.errorMessage = res.data.message
            }
          }).catch((err) => {
            if ((err.response.status === 403) && err.response.data.verified) {
              this.loading = false
              this.notVerified = true
              this.verificationId = err.response.data.id
            } else {
              this.loading = false
              this.hasError = true
              this.errorMessage = err.response.data.message
            }
          })
        } else {
          this.loading = false
        }
      })
    },
    resendToken () {
      this.notVerified = false
      const data = {
        id: this.verificationId
      }
      axios.post('/api/auth/resendToken', data).then((res) => {
        this.success = true
        this.successMessage = res.data.message
      }).catch((err) => {
        this.hasError = true
        this.notVerified = true
        console.log(err.response)
        this.errorMessage = err.response.data.message
      })
    }
  }
}
</script>
