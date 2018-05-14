<template>
  <div class="c-card mt-2" >
    <h4>Highlights on iBorrow</h4>
    <p class="u-mb-medium">Hot and top requests</p>
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
  name: 'highlight-sidebar',
  components: {
    SidebarArticle
  }
}
</script>
