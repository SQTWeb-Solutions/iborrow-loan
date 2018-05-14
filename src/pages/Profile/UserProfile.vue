<template>
<div class="row mt-4">
  <profile-information></profile-information>
  <div class="col-md-7 order-lg-1">
    {{this.$route.params}}
    <nav class="c-tabs">
      <div class="c-tabs__list nav nav-tabs" id="myTab" role="tablist">
        <a class="c-tabs__link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Activities</a>
        <a class="c-tabs__link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Requests</a>
        <a class="c-tabs__link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Followers</a>
        <a class="c-tabs__link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Followings</a>
        <a class="c-tabs__link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</a>
      </div>
      <div class="c-tabs__content tab-content" id="nav-tabContent">
        <div class="c-tabs__pane active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          Under Constrcutin
        </div>
        <div class="c-tabs__pane" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Under Construction</div>
        <div class="c-tabs__pane" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Under Construction</div>
      </div>
    </nav>
  </div>
</div>
</template>
<script>
import ProfileInformation from './ProfileInformation'
export default {
  name: 'active-user-profile',
  metaInfo () {
    return {
      title: 'My Profile'
    }
  },
  components: {
    ProfileInformation
  }
}
</script>
