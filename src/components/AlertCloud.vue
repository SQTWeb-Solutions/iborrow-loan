<template>
  <div class="c-note c-note-warning u-mb-small mt-0" >
    <span class="c-note__icon">
      <i class="feather icon-cloud-snow"></i>
    </span>
    <p class="text-center">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'alert-cloud',
  props: {
    text: {
      type: String
    }
  }
}
</script>
