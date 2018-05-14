<template>
  <div class="col-md-6 ">
    <div class="c-search-result">
      <content-placeholders>
        <content-placeholders-heading :img="true" />
        <content-placeholders-text :lines="3" />
      </content-placeholders>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-loader'
}
</script>
