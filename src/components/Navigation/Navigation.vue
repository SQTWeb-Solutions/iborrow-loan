<template>
  <div >
    <component :is="componentLoader">
    </component>
  </div>
</template>
<script>
export default {
  name: 'navigation-wrapper',
  props: {
    componentFile: {
      type: String,
      default: () => null
    }
  },
  computed: {
    componentLoader () {
      return () => import(`./${this.componentFile}`)
    }
  }
}
</script>
