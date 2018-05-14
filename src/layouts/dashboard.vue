<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <div class="o-page">
        <dashboard-sidebar></dashboard-sidebar>
        <div class="o-page__content">
          <top-header></top-header>
          <div class="container">
            <div class="row">
              <main :class="[this.$route.meta.sidebar ? 'col-lg-8 col-12': 'col-12']">
                <router-view/>
              </main>
              <dashboard-right-sidebar v-if="this.$route.meta.sidebar"></dashboard-right-sidebar>
            </div>
          </div>
        </div>
      </div>
      <div class="c-modal c-modal--small modal fade" id="modal-delete" tabindex="-1" role="dialog" aria-labelledby="modal-delete">
        <div class="c-modal__dialog modal-dialog" role="document">
            <div class="c-modal__content">
                <div class="c-modal__body">
                <span class="c-modal__close" data-dismiss="modal" aria-label="Close">
                    <i class="feather icon-x"></i>
                </span>

                <span class="c-icon c-icon--danger c-icon--large u-mb-small">
                    <i class="feather icon-alert-triangle"></i>
                </span>
                <h3 class="u-mb-small">Do you want to delete your account?</h3>

                <p class="u-mb-medium">By deleting you account, you no longer have access to your iBorrow, your connects and your information.</p>

                <div class="u-text-center">
                    <a href="#" class="c-btn c-btn--danger c-btn--outline u-mr-small" data-dismiss="modal" aria-label="Close">Cancel</a>
                    <a href="#" class="c-btn c-btn--danger">Delete</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  </transition>
</template>

<script>
import Sidebar from '@/assets/js/sidebar'
import Loading from '@/components/Loading'
import DashboardSidebar from '@/components/Sidebar'
import DashboardRightSidebar from '@/components/Dashboard/Sidebar'
import TopHeader from '@/components/Dashboard/TopHeader'
export default {
  name: 'dashboard',
  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'iBorrow',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading,
    DashboardSidebar,
    DashboardRightSidebar,
    TopHeader
  },
  mounted () {
    this.$loading = this.$refs.loading
    Sidebar()
  }
}
</script>
