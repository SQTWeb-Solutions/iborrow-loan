<template>
<div class="row mt-4">
  <profile-information></profile-information>
  <div class="col-md-7 order-lg-1">
    <div class="c-alert c-alert--info u-mb-medium">
      <span class="c-alert__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </span>

      <div class="c-alert__content">
        <h4 class="c-alert__title">My Profile Intro :)</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur, ipsam laboriosam alias reiciendis mollitia dolores ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur, ipsam laboriosam alias reiciendis mollitia dolores!</p>
      </div>
    </div>
    <h1>Page Under Construction</h1>
    <h6>Todo</h6>
    <ul>
      <li>Show users recent activities here</li>
      <li>Highlights of actiity at the top having Followers/Followings/Investment/Borrowings</li>
      <li>Tabs to shows Activites/Latest/Likes or Favorites/Highlights</li>
    </ul>

    <nav class="c-tabs">
      <div class="c-tabs__list nav nav-tabs" id="myTab" role="tablist">
        <a class="c-tabs__link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Activities</a>
        <a class="c-tabs__link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Latests</a>
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
