<template>
  <form @submit.prevent="validateBeforeSubmit" method="post" class="row">
    <h6 class="col-12 mb-3">Step 1 - Personal Information</h6>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Firstname</label>
        <input class="c-input u-mb-small" type="text" placeholder="e.g. Adam" v-model="firstName" name="firstName" v-validate="'required|alpha'">
        <alert-danger :text="errors.first('firstName')" :active="errors.has('firstName')"></alert-danger>
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Lastname</label>
        <input class="c-input u-mb-small" type="text" placeholder="e.g. Johnson" v-model="lastName" name="lastName" v-validate="'required|alpha'">
        <alert-danger :text="errors.first('lastName')" :active="errors.has('lastName')"></alert-danger>
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Phone Number</label>
        <input class="c-input u-mb-small" v-mask="'+234 (###) ####-####'" type="text" placeholder="e.g. +234(70) 12345678" v-model="phoneNumber" name="phoneNumber" v-validate="'required'">
        <alert-danger :text="errors.first('phoneNumber')" :active="errors.has('phoneNumber')"></alert-danger>
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Date of Birth (18 years and above)</label>
        <input class="c-input u-mb-small" type="tel" v-mask="'##/##/####'" placeholder="e.g. 1990-10-10" v-model="dob" name="dob" v-validate="'required'">
        <alert-danger :text="errors.first('dob')" :active="errors.has('dob')"></alert-danger>
      </div>
    </div>
    <div class="col-md-12">
      <div class="c-field">
        <label class="c-field__label">Email Address</label>
        <input class="c-input u-mb-small" type="email" placeholder="e.g. adam@email.com" v-model="email" name="email" v-validate="'required|email|uniqueEmail'">
        <alert-danger :text="errors.first('email')" :active="errors.has('email')"></alert-danger>
      </div>
    </div>
    <div class="col-md-12">
      <div class="c-field">
        <label class="c-field__label">Username</label>
        <input class="c-input u-mb-small" type="text" placeholder="e.g. admins123" v-model="username" name="username" v-validate="'required|alpha_num|uniqueUsername'">
        <alert-info text="Username must be unique, it can only contain letters and numbers. " :active="true"></alert-info>
        <alert-danger :text="errors.first('username')" :active="errors.has('username')"></alert-danger>
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Password</label>
        <input class="c-input u-mb-small" v-model="password" type="password" name="password" v-validate="'required|min:6'" placeholder="Character and Numbers only" >
        <alert-danger :text="errors.first('password')" :active="errors.has('password')"></alert-danger>
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Confirm Password</label>
        <input class="c-input u-mb-small" type="password" placeholder="Confirm your password" name="confirmPassword" v-model="confirmPassword" v-validate="'required|confirmed:password'">
        <alert-danger :text="errors.first('confirmPassword')" :active="errors.has('confirmPassword')"></alert-danger>
      </div>
    </div>
    <span class="c-divider u-mv-medium"></span>
    <h6 class="col-12 mb-3">Step 2 - Contact Information</h6>
    <div class="col-md-12">
      <div class="c-field">
        <label class="c-field__label">Address</label>
        <textarea v-model="address" v-validate="'required'" name="address" class="c-input u-mb-small" placeholder="Residential Address"></textarea>
        <alert-danger :text="errors.first('address')" :active="errors.has('address')"></alert-danger>
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">City</label>
        <input v-model="city" v-validate="'required'" name="city" class="c-input u-mb-small" type="text" placeholder="e.g. Ikeja" >
        <alert-danger :text="errors.first('city')" :active="errors.has('city')"></alert-danger>
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">State</label>
        <select v-model="state" v-validate="'required'" class="c-input" name="state">
          <option :value="state" v-for="(state) in states" :key="state.id">{{ state }}</option>
        </select>
        <alert-danger :text="errors.first('state')" :active="errors.has('state')"></alert-danger>
      </div>
    </div>
    <span class="c-divider u-mv-medium"></span>
    <h6 class="col-12 mb-3">Step 3 - Account Information</h6>
    <div class="col-md-12">
      <div class="c-field">
        <label class="c-field__label">Prefered State of Operation</label>
        <select v-model="preferedState" v-validate="'required'" class="c-input" name="preferedState">
          <option :value="state" v-for="(state) in states" :key="state.id">{{ state }}</option>
        </select>
        <alert-info text="This is the state that will be used to serve you information on iBorrow. You are can only perform operation form your prefered state." :active="true"></alert-info>
        <alert-danger :text="errors.first('preferedState')" :active="errors.has('preferedState')"></alert-danger>
      </div>
    </div>
    <span class="c-divider u-mv-medium"></span>
    <h6 class="col-12 mb-3">Terms of use</h6>
    <div class="col-12">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <span class="c-divider u-mv-medium"></span>
    <div class="col-12 ">
      <button class="c-btn c-btn--info" :disabled="loading"> <font-awesome-icon icon="spinner" spin  v-if="loading" /> {{ loading ? 'Creating' : 'Create My Account' }}</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import { Validator } from 'vee-validate'
import AlertInfo from '@/components/AlertInfo'
import AlertDanger from '@/components/AlertDanger'
import { mask } from 'vue-the-mask'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import States from '@/resources/states'
const isUnique = (value) => {
  return axios.post('/api/auth/validate/email', { email: value }).then((response) => {
    return {
      valid: response.data.valid,
      data: {
        message: response.data.message
      }
    }
  })
}
const isUniqueUsername = (value) => {
  return axios.post('/api/auth/validate/username', { username: value }).then((response) => {
    return {
      valid: response.data.valid,
      data: {
        message: response.data.message
      }
    }
  })
}
Validator.extend('uniqueEmail', {
  validate: isUnique,
  getMessage: (field, params, data) => {
    return data.message
  }
})
Validator.extend('uniqueUsername', {
  validate: isUniqueUsername,
  getMessage: (field, params, data) => {
    return data.message
  }
})
export default {
  name: 'investors-form',
  data () {
    return {
      username: null,
      password: null,
      confirmPassword: null,
      firstName: null,
      lastName: null,
      email: null,
      state: null,
      phoneNumber: null,
      dob: null,
      city: null,
      address: null,
      preferedState: null,
      loading: false,
      states: States
    }
  },
  components: {
    AlertInfo,
    AlertDanger,
    FontAwesomeIcon
  },
  directives: {
    mask
  },
  methods: {
    validateBeforeSubmit (e) {
      this.$validator.validateAll().then((result) => {
        this.loading = true
        if (result) {
          let data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password,
            state: this.state,
            region: this.preferedState,
            city: this.city,
            address: this.address,
            phoneNumber: this.phoneNumber,
            dateOfBirth: this.dob
          }
          return axios.post('/api/auth/signup/borrowers', data).then((res) => {
            if (res.status === 200) {
              this.loading = false
              e.target.reset()
              const useremail = res.data.user.email
              // Redirect the registration success page
              this.$router.push({ name: 'auth.register.success', params: { email: useremail } })
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          this.loading = false
        }
      })
    }
  }
}
</script>
