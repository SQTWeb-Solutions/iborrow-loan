<template>
  <div class="c-note c-note-danger u-mb-small mt-1" v-if="active" >
    <span class="c-note__icon">
      <i class="feather icon-alert-octagon"></i>
    </span>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'alert-danger',
  props: {
    text: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
