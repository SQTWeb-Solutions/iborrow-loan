<template>
  <div class="c-card mt-2" >
    <h4>New from your network</h4>
    <p class="u-mb-medium">Updates and request</p>
    <div class="s-card-body">
      <sidebar-article></sidebar-article>
      <sidebar-article></sidebar-article>
      <sidebar-article></sidebar-article>
      <sidebar-article></sidebar-article>
    </div>
    <footer>
      <a href="#" class="c-btn c-btn--info has-arrow c-btn--small c-btn--outline ">See more <i class="feather icon-arrow-right"></i></a>
    </footer>
  </div>
</template>

<script>
import SidebarArticle from './SidebarArticle'
export default {
  name: 'dashboard-sidebar-network',
  components: {
    SidebarArticle
  }
}
</script>
