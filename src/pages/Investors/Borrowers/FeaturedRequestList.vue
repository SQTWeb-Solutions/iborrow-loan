<template>
  <div class="row mt-4">
      <div class="col-lg-4 order-lg-2">
          <featured-search-form></featured-search-form>
      </div>
    <div class="col-lg-8 order-lg-1" >
        <div class="row">
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
          <featured-request-item></featured-request-item>
        </div>
    </div>
  </div>
</template>

<script>
// TODO: Convert this component to the type that selects based on the user type with condition of if investors||borrowers
import FeaturedSearchForm from '@/components/Members/FeaturedSearchForm'
import FeaturedRequestItem from '@/components/Members/FeaturedRequestItem'
export default {
  name: 'featured-request-list',
  components: {
    FeaturedRequestItem,
    FeaturedSearchForm
  }
}
</script>
