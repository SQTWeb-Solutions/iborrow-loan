<template>
  <div class="col-md-6">
      <div class="c-search-result">
          <div class="o-media">
              <div class="o-media__img u-mr-small">
                <router-link tag="div" :to="{ name: 'profile.member', params: { username: username } }" class="c-avatar c-avatar--small c-avatar-link">
                  <div class="c-avatar c-avatar--small">
                      <span class="c-avatar__name" >{{shortName}}</span>
                  </div>
                </router-link>
              </div>
              <div class="o-media__body">
                  <router-link tag="a" :to="{ name: 'profile.member', params: { username: username } }">
                    <h4 class="c-search-result__title">{{firstName}} <small class="text-muted"><i class="feather icon-at-sign"></i>{{username}}</small></h4>
                  </router-link>
                  <p class="c-search-result__meta "><i class="feather icon-user"></i> {{userType}} | <i class="feather icon-map-pin"></i> {{region}} <br> <small class="badge badge-primary">Available to lend</small></p>
              </div>
          </div>
          <ul class="c-search-result__actionlist">
              <li class="c-search-result__action">
                  <span class="c-tooltip c-tooltip--bottom" aria-label="Follow John Doe" v-if="!followStatus"><i class="feather icon-user-plus"></i></span>
                  <span class="c-tooltip c-tooltip--bottom" aria-label="Unfollow John Doe" v-else><i class="feather icon-user-minus"></i></span>
              </li>
              <li class="c-search-result__action dropdown">
                  <a class="dropdown-toggle" href="#" id="memberOption" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-vertical"></i></a>
                  <div class="c-dropdown__menu dropdown-menu dropdown-menu-right has-arrow" aria-labelledby="memberOption" x-placement="bottom-end" >
                      <a href="#" class="c-dropdown__item">View Profile</a>
                      <a href="#" class="c-dropdown__item">Report {{shortName}}</a>
                  </div>
              </li>
          </ul>
          <div class="mt-2">
            <small class="text-muted">{{profileStatus}}</small>
          </div>

      </div>
  </div>
</template>

<script>
// TODO: Add props for user for the user profile and params
export default {
  name: 'member-short-profile',
  props: {
    shortName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    userType: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    profileStatus: {
      type: String,
      default: 'No status information to display'
    },
    followStatus: {
      type: Boolean,
      default: false
    }
  }
}
</script>
