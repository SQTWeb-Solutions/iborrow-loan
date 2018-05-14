<template>
  <div class="row mt-3">
    <div class="col-12 ">
      <div class="c-requests">
        <caption class="c-requests__title d-flex flex-column">
            <h5>Respond to Your 4 Investors Requests</h5>
            <a href="#" ><small class="text-primary">View sent requests</small></a>
        </caption>
        <section class="c-requests__body">
          <ol class="c-request__items">
           <request-list></request-list>
           <request-list></request-list>
           <request-list></request-list>
           <request-list></request-list>
           <request-list></request-list>
          </ol>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import RequestList from '@/components/Requests/RequestList'
export default {
  name: 'investors-borrowing-requests',
  components: {
    RequestList
  }
}
</script>
