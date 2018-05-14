<template>
  <nav class="col-lg-4 d-none d-lg-block" >
    <network-sidebar></network-sidebar>
    <highlight-sidebar></highlight-sidebar>
    <div class="c-card mt-2" >
      <small>© Copyright {{ new Date().getFullYear() }} iBorrow Corporation. All rights reserved</small>
      <nav>
          <a class="c-footer__link" href="#">Terms</a>
          <a class="c-footer__link" href="#">Policy</a>
          <a class="c-footer__link" href="#">FAQ</a>
          <a class="c-footer__link" href="#">Help</a>
      </nav>
    </div>
  </nav>
</template>

<script>
import NetworkSidebar from './Sidebar/Network'
import HighlightSidebar from './Sidebar/HighlightSidebar'
export default {
  name: 'dashboard-sidebar',
  components: {
    NetworkSidebar,
    HighlightSidebar
  }
}
</script>
