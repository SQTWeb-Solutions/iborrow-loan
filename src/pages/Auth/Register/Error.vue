<template>
  <div class="o-page o-page--center">
    <div class="o-page__card">
      <div class="c-card c-card--center">
        <span class="c-icon c-icon--large u-mb-small">
          <img src="@/assets/img/logo.png" alt="iBorrrow">
        </span>

        <h4 class="u-mb-medium">Registration Error :(</h4>
        <p class="text-left">Ooops something went wrong with the registration, this is likely to a network error, however, do not panic, please check your email address, if you can receive an email from us, your registration is complete, if not please try again.</p>
        <div class="c-note u-mb-small">
          <span class="c-note__icon">
          <i class="feather icon-info"></i>
          </span>

          <p>Check your email address for any message.</p>
        </div>
        <router-link :to="{ name: 'auth.login' }" class="c-btn c-btn--fullwidth c-btn--info">Click to login now</router-link>
        <p class="text-left mt-4 ">Happy Lending/Borrowing.</p>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'registration-error-page',
  metaInfo () {
    return {
      title: 'Registration Error'
    }
  }
}
</script>
