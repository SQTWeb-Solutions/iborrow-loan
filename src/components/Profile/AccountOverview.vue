<template>
  <div class="c-card" v-if="loading == true">
    <div class="u-text-center">
      <div class="c-avatar c-avatar--large u-mb-small u-inline-flex">
        <img class="c-avatar__img" v-auth-image="profileImage" :alt="userInfo.displayName" >
      </div>

      <h5>{{userInfo.displayName}}</h5>
      <p class="text-black">{{userInfo.email}}</p>
      <p class="text-muted">@{{userInfo.username}}</p>
    </div>
    <div class="u-flex u-mt-medium">
        <router-link tag="a" :to="{ name: 'profile.edit' }" class="c-btn c-btn--info c-btn--fullwidth c-btn--small u-mr-xsmall has-icon" >
          <i class="feather icon-user"></i> Edit Profile
        </router-link>
        <router-link tag="a" :to="{ name: 'profile.member', params: { username: userInfo.username} }" class="c-btn c-btn--secondary c-btn--fullwidth c-btn--small">View Profile As</router-link>
    </div>
    <span class="c-divider u-mv-small"></span>
    <div class="c-table-responsive">
      <table class="c-table u-text-center u-border-right-zero u-border-left-zero u-border-bottom-zero u-border-top-zero">
          <thead>
              <tr>
                  <th class="u-pt-small">

                      <div class="c-rating text-danger">
                          D
                      </div>

                  </th>
                  <th class="u-pt-small u-color-primary">38</th>
                  <th class="u-pt-small u-color-primary">54</th>
                  <th class="u-pt-small u-color-primary">186</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td class="u-text-mute u-text-xsmall u-pb-small u-pr-xsmall u-text-uppercase">Risk Category</td>
                  <td class="u-text-mute u-text-xsmall u-pb-small u-pr-xsmall  u-text-uppercase">Reviews</td>
                  <td class="u-text-mute u-text-xsmall u-pb-small u-pr-xsmall  u-text-uppercase">Followers</td>
                  <td class="u-text-mute u-text-xsmall u-pb-small u-pr-xsmall  u-text-uppercase">Finished Loan</td>
              </tr>
          </tbody>
      </table>
    </div>
    <div class="c-feed has-icons u-mt-medium">
        <div class="c-feed__item has-icon">
            <i class="c-feed__item-icon u-bg-info feather icon-phone"></i>
            <p>{{userInfo.contactInformation.phoneNumber}} <span class="badge badge-danger u-ml-auto">Not Verified</span></p>
            <span class="c-feed__meta">Phone Number</span>
        </div>

        <div class="c-feed__item has-icon">
            <i class="c-feed__item-icon u-bg-fancy feather icon-map-pin"></i>
            <p>{{userInfo.region}}</p>
            <p class="c-feed__meta">Prefered Region</p>
        </div>
    </div>
    <div class="u-pt-medium u-border-top u-text-center">
        <a class="u-text-mute u-text-small" href="https://iborrow.com/@iborrow">
            <i class="feather icon-globe u-mr-xsmall"></i>https://iborrow.com/@{{userInfo.username}}
        </a>
    </div>
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

</template>

<script>
export default {
  name: 'acount-information',
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
