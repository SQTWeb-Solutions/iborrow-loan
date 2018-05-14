<template>
<div class="row mt-2">
  <div class="col-12">
    <div class="c-post">
        <h6 class="mb-1">Quickly add investment post</h6>
        <input type="text" class="c-post_title" placeholder="Enter caption for your investment">
        <textarea class="c-post__content" placeholder="Add description to your investment"></textarea>
        <div class="c-post__toolbar">
            <a class="c-post__submit c-btn c-btn--info" href="#">
                <i class="feather icon-help-circle"></i>
            </a>
            <div class="c-post__time d-none d-md-inline-block " >
              <div class="c-field has-icon-left">
                <input type="text" placeholder="Enter amount to invest" class="c-input">
                <i class="c-field__icon u-color-primary feather icon-hash"></i>
              </div>
            </div>
            <a class="c-btn c-btn--success u-float-right ml-1" href="#">Post</a>
            <a class="c-btn c-btn--secondary c-btn--outline u-float-right" href="#">Advance option</a>
        </div>
    </div>

    <ol class="c-stream">
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
        <stream-item></stream-item>
    </ol>
  </div>
</div>
</template>
<script>
import StreamItem from '@/components/Dashboard/Streams/StreamsItem'
export default {
  name: 'investors-trending-page',
  metaInfo () {
    return {
      title: 'Trending'
    }
  },
  components: {
    StreamItem
  }
}
</script>
