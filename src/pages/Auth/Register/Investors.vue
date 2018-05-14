<template>
  <div class="row">
    <div class="col-12">

      <div class="c-card ">
        <div class="text-center">
          <h4>Create Investor Account</h4>
          <p>Go through the follwoing steps to create an Investors account on iBorrow</p>
        </div>
        <hr />
        <div class="row d-flex justify-content-center">
          <div class="col-md-8 col-12">
            <investors-form></investors-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InvestorsForm from './InvestorsForm'
export default {
  name: 'register-investors',
  components: {
    InvestorsForm
  }
}
</script>
