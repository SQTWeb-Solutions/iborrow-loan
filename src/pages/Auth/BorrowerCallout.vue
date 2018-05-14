<template>
  <section class="s-start">
    <div class="container">
      <div class="row u-justify-center">
        <div class="col-sm-10 col-lg-6 u-text-center">
          <h2 class="u-mb-small">Let's Start The Journey!</h2>
          <p class="u-h5 u-mb-medium">Change the way you operate your business. Thanks to iBorrow, you can now get enough focus on yur business and have capital to fund your business.</p>
          <router-link :to="{name:'auth.register.borrowers'}" class="c-btn c-btn--info text-uppercase" tag="a">Become a borrower</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'borrower-callout'
}
</script>
