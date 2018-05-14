<template>
  <div class="o-page o-page--center">
    <div class="o-page__card">
      <div class="c-card c-card--center">
        <span class="c-icon c-icon--large u-mb-small">
          <img src="@/assets/img/logo.png" alt="iBorrrow">
        </span>

        <h4 class="u-mb-medium">Forgot Your Password</h4>
        <forgot-form></forgot-form>
        <hr />
        <router-link :to="{ name: 'auth.login' }" class="btn-link" >Remember password? Proceed to login</router-link>
      </div>
    </div>
  </div>

</template>
<script>
import ForgotForm from './ForgotForm'
export default {
  name: 'forgot-password-page',
  components: {
    ForgotForm
  },
  metaInfo () {
    return {
      title: 'Forgot Password'
    }
  }
}
</script>
