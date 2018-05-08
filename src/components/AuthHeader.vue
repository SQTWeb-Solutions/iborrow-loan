<template>
  <div>
    <div class="c-hero u-mb-small">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <header class="c-navbar u-mb-large">
              <a class="c-navbar__brand u-mr-auto" href="/">
                 <img src="@/assets/img/logo_30px.png" alt="iBorrow Logo" title="iBorrow Logo">
              </a>

              <nav class="c-landing-nav">
                <a class="c-landing-nav__link" href="/">Login</a>
                <a class="c-landing-nav__link" href="/">Back to iBorrow</a>
              </nav>
            </header>
          </div>
        </div>

        <div class="row u-justify-center u-text-center">
          <div class="col-md-7">
            <div class="c-hero__img">
              <img class="c-hero__laptop" src="@/assets/img/hero.png" alt="Neat">

              <span class="c-hero__circle1"></span>
              <span class="c-hero__circle2"></span>
              <span class="c-hero__circle3"></span>
              <span class="c-hero__circle4"></span>

              <span class="c-hero__circle5 c-hero__circle--small"></span>
              <span class="c-hero__circle6 c-hero__circle--small"></span>
              <span class="c-hero__circle7 c-hero__circle--small"></span>
              <span class="c-hero__circle8 c-hero__circle--small"></span>
            </div>

          </div>
        </div>

        <div class="row u-justify-center u-text-center">
          <div class="col-sm-10 col-lg-5">
            <h1 class="c-hero__title u-mb-small">iBorrow</h1>
            <p class="u-mb-medium u-h5">P2P Lending provides alternative investment option to Investors and affordable P2P loans to Borrowers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auth-header'
}
</script>
