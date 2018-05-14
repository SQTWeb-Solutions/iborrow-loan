<template>
  <div class="c-note u-mb-small mt-1" v-if="active">
    <span class="c-note__icon">
      <i class="feather icon-info"></i>
    </span>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'alert-info',
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

<style scoped>

</style>
