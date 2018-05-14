<template>
  <div class="o-page o-page--center">
    <div class="o-page__card">
      <div class="c-card c-card--center">
        <span class="c-icon c-icon--large u-mb-small">
          <img src="@/assets/img/logo.png" alt="iBorrrow">
        </span>

        <h4 class="u-mb-medium">Welcome Back :(</h4>
        <p class="text-left">Your account has been verified and you are now officially a verified member of iBorrow</p>
        <router-link :to="{ name: 'auth.login' }" class="c-btn c-btn--fullwidth c-btn--info">Proceed to login now</router-link>
        <p class="text-left mt-4 ">Happy Lending/Borrowing.</p>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'confirmation-error-page',
  metaInfo () {
    return {
      title: 'Registration Error'
    }
  }
}
</script>
