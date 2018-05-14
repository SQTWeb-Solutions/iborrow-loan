<template>
  <div class="row mt-4">
    <div class="col-12">
      <nav class="c-tabs">
        <div class="c-tabs__list nav nav-tabs" id="myTab" role="tablist">
          <router-link :to="{ name: 'profile.edit' }" class="c-tabs__link" active-class="active" >
            <span class="c-tabs__link-icon">
              <i class="feather icon-settings"></i>
            </span>Account Settings
          </router-link>
          <a class="c-tabs__link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
            <span class="c-tabs__link-icon">
              <i class="feather icon-settings"></i>
            </span>Security Settings
          </a>
          <a class="c-tabs__link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
            <span class="c-tabs__link-icon">
              <i class="feather icon-settings"></i>
            </span>Notification Settings
          </a>
        </div>
        <div class="c-tabs__content tab-content">
          <div class="c-tabs__pane active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <form @submit.prevent="validateBeforeSubmit" method="post">
              <div class="row">
                <div class="col-xl-6">
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="first-name">Firstname</label>
                    <input class="c-input" type="text" placeholder="e.g. Adam" v-model="firstName" name="firstName" v-validate="'required|alpha'" id="first-name" :class="{ 'c-input--danger': errors.has('firstName') }">
                    <alert-danger :text="errors.first('firstName')" :active="errors.has('firstName')"></alert-danger>
                  </div>
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="last-name">Lastname</label>
                    <input class="c-input" type="text" placeholder="e.g. Johnson" :class="{ 'c-input--danger': errors.has('lastName') }" v-model="lastName" name="lastName" v-validate="'required|alpha'" id="last-name">
                    <alert-danger :text="errors.first('lastName')" :active="errors.has('lastName')"></alert-danger>
                  </div>
                  <div class="c-field u-mb-small">
                    <label class="c-field__label"  for="user-email">Email Address (readonly)</label>
                    <input class="c-input" readonly v-model="email" disabled type="email" id="user-email">
                  </div>
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="username">Username (readonly)</label>
                    <input class="c-input" v-model="username" disabled type="text" id="username" readonly>
                  </div>
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="phoneumber">Phone Number <span class="badge badge-sm badge-danger">(not verified)</span></label>
                    <input class="c-input" v-mask="'+234 (###) ####-####'" type="text" :class="{ 'c-input--danger': errors.has('phoneNumber') }" placeholder="e.g. +234(70) 12345678" v-model="phoneNumber" name="phoneNumber" v-validate="'required'" id="ponenumber">
                    <alert-danger :text="errors.first('phoneNumber')" :active="errors.has('phoneNumber')"></alert-danger>
                  </div>
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="dob">Date of Birth </label>
                    <input class="c-input" type="tel" v-mask="'##/##/####'" :class="{ 'c-input--danger': errors.has('dob') }" placeholder="e.g. 1990-10-10" v-model="dob" name="dob" v-validate="'required'" id="dob">
                    <alert-danger :text="errors.first('dob')" :active="errors.has('dob')"></alert-danger>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="city">City</label>
                    <input class="c-input" v-model="city" :class="{ 'c-input--danger': errors.has('city') }" v-validate="'required'" name="city" id="city" placeholder="Enter your city of residence" >
                    <alert-danger :text="errors.first('city')" :active="errors.has('city')"></alert-danger>
                  </div>
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="state">State</label>
                    <div class="c-select">
                      <select class="c-select__input" v-model="state" :class="{ 'c-input--danger': errors.has('state') }" v-validate="'required'" name="state" id="state">
                        <option :value="newstate" v-for="(newstate) in states" :key="newstate.id" :selected="state === newstate">{{ newstate }}</option>
                      </select>
                    </div>
                    <alert-danger :text="errors.first('state')" :active="errors.has('state')"></alert-danger>
                  </div>
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="address">Address</label>
                    <textarea class="c-input" placeholder="Enter your address" :class="{ 'c-input--danger': errors.has('address') }" id="address" v-model="address" ></textarea>
                    <alert-danger :text="errors.first('address')" :active="errors.has('address')"></alert-danger>
                  </div>
                  <div class="c-field u-mb-small">
                    <label class="c-field__label" for="region">Prefered State</label>
                    <div class="c-select">
                      <select v-model="preferedState" v-validate="'required'" :class="{ 'c-input--danger': errors.has('preferedState') }" name="preferedState" class="c-select__input" id="region">
                        <option :value="newRegion" v-for="(newRegion) in states" :key="newRegion.id" :seleted="preferedState === preferedState">{{ newRegion }}</option>
                      </select>
                    </div>
                    <alert-info text="This is the state that will be used to serve you information on iBorrow. You are can only perform operation form your prefered state." :active="true"></alert-info>
                    <alert-danger :text="errors.first('preferedState')" :active="errors.has('preferedState')"></alert-danger>
                  </div>
                </div>
              </div>

              <span class="c-divider u-mv-medium"></span>

              <div class="row">
                <div class="col-12 col-sm-7 col-xl-3 u-mr-auto u-mb-xsmall">
                  <button class="c-btn c-btn--info c-btn--fullwidth" :disabled="submitting" type="submit"><font-awesome-icon icon="spinner" spin  v-if="submitting" /> {{ submitting ? 'Saving Settings...' : 'Save Settings' }}</button>
                </div>
                <delete-account></delete-account>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// TODO: Fix the date of birth returned
// TODO: SUbmit the form to the server to update the user information
import DeleteAccount from '@/components/Profile/DeleteAccount'
import States from '@/resources/states'
import AlertInfo from '@/components/AlertInfo'
import AlertDanger from '@/components/AlertDanger'
import { mask } from 'vue-the-mask'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import axios from 'axios'
export default {
  name: 'edit-profile',
  data () {
    return {
      states: States,
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
      submitting: false,
      user: [],
      profileImage: null,
      loadedUser: false
    }
  },
  components: {
    AlertInfo,
    AlertDanger,
    FontAwesomeIcon,
    DeleteAccount
  },
  directives: {
    mask
  },
  created () {
    this.getUser()
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        this.submitting = true
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
              this.submitting = false
              const useremail = res.data.user.email
              // Redirect the registration success page
              this.$router.push({ name: 'auth.register.success', params: { email: useremail } })
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          this.submitting = false
        }
      })
    },
    async getUser () {
      // Dispatch an action to fetch the user information in case it doesn't exist before
      await this.$store.dispatch('auth/fetchUser')
      this.user = this.$store.getters['auth/user']
      this.firstName = this.user.firstName
      this.lastName = this.user.lastName
      this.username = this.user.username
      this.email = this.user.email
      this.dob = `${new Date(this.user.otherInformation.dob).getDay()}-${new Date(this.user.otherInformation.dob).getDate()}-${new Date(this.user.otherInformation.dob).getDay()}${new Date(this.user.otherInformation.dob).getFullYear()}`
      this.city = this.user.otherInformation.city
      this.address = this.user.otherInformation.address
      this.preferedState = this.user.region
      this.phoneNumber = this.user.contactInformation.phoneNumber
      this.state = this.user.otherInformation.state
      this.profileImage = `${process.env.API_URL}/${this.$store.getters['auth/user'].profileImageURL}`
      this.loadedUser = true
    }
  }
}
</script>
