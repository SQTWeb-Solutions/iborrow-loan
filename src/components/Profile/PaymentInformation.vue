<template>
  <div class="c-card">
    <h4>Payments</h4>
    <p class="u-mb-medium">Add or remove a payout method</p>
    <content-placeholders>
      <content-placeholders-heading :img="true" />
    </content-placeholders>

    <credit-card-list v-if="payoutMethod"></credit-card-list>

    <a class="c-btn c-btn--info has-arrow" href="#" v-if="payoutMethod">
      <i class="feather icon-credit-card"></i> Add more payent method
    </a>

  </div>
</template>

<script>
// TODO: Add fetcher to check for the users payment methods that are available
import CreditCardList from './CreditCardList'
export default {
  name: 'payment-information',
  data () {
    return {
      payoutMethod: false
    }
  },
  components: {
    CreditCardList
  }
}
</script>
