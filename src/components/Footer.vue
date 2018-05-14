<template>
  <footer class="c-footer">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3">
            <div class="c-footer__col">
              <a href="index.html" title="Neat UI Kit">
                <img src="@/assets/img/logo.png" alt="iBorrow" style="max-height:100px;">
              </a>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="c-footer__col">
              <p class="c-text--subtitle u-mb-xsmall">Links</p>

              <ul>
                <li><a class="c-footer__link" href="/">Home</a></li>
                <li><a class="c-footer__link" href="/">About iBorrow</a></li>
                <li><a class="c-footer__link" href="/">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="c-footer__col">
              <p class="c-text--subtitle u-mb-xsmall">Policies</p>

              <ul>
                <li><a class="c-footer__link" href="/">Investors Policy</a></li>
                <li><a class="c-footer__link" href="/">Borrowers Policy</a></li>
                <li><a class="c-footer__link" href="/">General Policy</a></li>
              </ul>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="c-footer__col">
              <p class="c-text--subtitle u-mb-xsmall">Help</p>

              <ul>
                <li><a class="c-footer__link" href="/">FAQs</a></li>
                <li><a class="c-footer__link" href="/">Terms of use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
// TODO: Route the links properly to each page
export default {
  name: 'auth-footer'
}
</script>
