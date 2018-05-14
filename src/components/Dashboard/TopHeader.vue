<template>
<header class="c-navbar">
    <button class="c-sidebar-toggle js-sidebar-toggle">
    <i class="feather icon-align-left"></i>
    </button>

    <h2 class="c-navbar__title">{{this.$route.meta.title}}</h2>
    <div class="c-field c-search u-mr-medium has-icon-right d-none d-md-block">
      <input class="c-input" type="text" placeholder="Search iBorrow (enter keyword) ">
      <i class="c-field__icon u-color-primary feather icon-search"></i>
    </div>
    <mentions></mentions>
    <notification-dropdown></notification-dropdown>
    <account-info></account-info>
</header>
</template>

<script>
// TODO: reconfigure search in the header
import NotificationDropdown from './Notification'
import Mentions from './Mentions'
import AccountInfo from './AccountInfo'
export default {
  name: 'top-header',
  components: {
    NotificationDropdown,
    Mentions,
    AccountInfo
  }
}
</script>
