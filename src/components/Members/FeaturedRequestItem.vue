<template>
  <div class="col-md-6">
      <div class="c-search-result">
          <div class="o-media">
              <div class="o-media__img u-mr-small">
                  <div class="c-avatar c-avatar--medium">
                      <span class="c-avatar__name" >QA</span>
                  </div>
              </div>
              <div class="o-media__body">
                  <h4 class="c-search-result__title">Caroline Higgins</h4>
                  <p class="c-search-result__meta">Investors <br> 5 Lended Loans | 41 Pending Request</p>
              </div>
          </div>
          <ul class="c-search-result__actionlist">
              <li class="c-search-result__action">
                  <a href="#"><i class="feather icon-user-plus"></i></a>
              </li>
              <li class="c-search-result__action dropdown">
                  <a class="dropdown-toggle" href="#" id="searchResult1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-vertical"></i></a>
                  <div class="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="searchResult1" x-placement="bottom-end" style="position: absolute; transform: translate3d(-102px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                      <a href="#" class="c-dropdown__item">Link 1</a>
                      <a href="#" class="c-dropdown__item">Link 2</a>
                      <a href="#" class="c-dropdown__item">Link 3</a>
                  </div>
              </li>
          </ul>
          <div class="mt-2">
            <a><h5>Lending #5milion out for 5 people</h5></a>
            <small class="text-muted">When the equation, first to ability the forwards, the a but travelling.</small>
            <footer class="">
              <div class="c-search-item__actionlist d-flex justify-content-around pt-2">
                <a class="c-search-item__action" href="#">
                  <i class="feather icon-hash"></i> 4,000,000
                </a>
                <a class="c-search-item__action" href="#">
                  <i class="feather icon-message-circle"></i> 15 Months
                </a>
                <a class="c-search-item__action" href="#">
                  <i class="feather icon-message-circle"></i> 34 Comments
                </a>
              </div>
            </footer>
          </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'friend-request-item'
}
</script>
