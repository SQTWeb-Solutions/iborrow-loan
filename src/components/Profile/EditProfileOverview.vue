<template>
<div class="col-xl-4">
  <div class="c-card u-text-center"  v-if="loading == true">
      <div class="c-avatar u-inline-flex">
      <img class="c-avatar__img" v-auth-image="profileImage" :alt="userInfo.displayName">
      </div>
      <h5>{{userInfo.displayName}}</h5>
      <p class="u-pb-small u-mb-small u-border-bottom">@{{userInfo.username}}</p>
  </div>
  <div class="c-card" v-else>
    <content-placeholders :rounded="true">
      <content-placeholders-img />
      <content-placeholders-heading />
    </content-placeholders>
    <span class="c-divider u-mv-small"></span>
    <content-placeholders :rounded="true">
      <content-placeholders-heading />
    </content-placeholders>
  </div>
</div>
</template>
<script>
export default {
  name: 'edit-profile-overview',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    userInfo: {
      type: Object
    },
    profileImage: {
      type: String
    }
  }
}
</script>
