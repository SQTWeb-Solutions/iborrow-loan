<template>
  <div class="o-page o-page--center">
    <div class="o-page__card">
      <div class="c-card c-card--center">
        <span class="c-icon c-icon--large u-mb-small">
          <img src="@/assets/img/logo.png" alt="iBorrrow">
        </span>

        <h4 class="u-mb-medium">Reset Your Password</h4>
        <reset-form></reset-form>
      </div>
    </div>
  </div>

</template>
<script>
import ResetForm from './ResetForm'
export default {
  name: 'forgot-password-page',
  components: {
    ResetForm
  },
  metaInfo () {
    return {
      title: 'Reset Password'
    }
  }
}
</script>
