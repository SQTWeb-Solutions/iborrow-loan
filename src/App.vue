<template>
  <div id="app">
    <component :is="componentLoader">
    </component>
  </div>
</template>

<script>
export default {
  name: 'application',
  computed: {
    componentLoader () {
      return () => import(`@/layouts/${this.componentFile}`)
    }
  }
}
</script>
