<template>
  <form class="row">
    <h6 class="col-12 mb-3">Step 1 - Personal Information</h6>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Firstname</label>
        <input class="c-input u-mb-small" type="text" placeholder="e.g. Adam" required="">
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Lastname</label>
        <input class="c-input u-mb-small" type="text" placeholder="e.g. Johnson" required="">
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Phone Number</label>
        <input class="c-input u-mb-small" type="text" placeholder="e.g. +234(70) 12345678" required="">
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Date of Birth (18 years and above)</label>
        <input class="c-input u-mb-small" type="date" placeholder="e.g. 1990-10-10" required="">
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Password</label>
        <input class="c-input u-mb-small" type="password" placeholder="Character and Numbers only" required="">
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">Confirm Password</label>
        <input class="c-input u-mb-small" type="text" placeholder="Confirm your password" required="">
      </div>
    </div>
    <span class="c-divider u-mv-medium"></span>
    <h6 class="col-12 mb-3">Step 2 - Contact Information</h6>
    <div class="col-md-12">
      <div class="c-field">
        <label class="c-field__label">Address</label>
        <textarea class="c-input u-mb-small" type="text" placeholder="Residential Address" required=""></textarea>
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">City</label>
        <input class="c-input u-mb-small" type="text" placeholder="e.g. Ikeja" required="">
      </div>
    </div>
    <div class="col-md-6">
      <div class="c-field">
        <label class="c-field__label">State</label>
        <select class="c-input" id="user-country">
          <option>Australia</option>
          <option>Singapore</option>
          <option>United Stated</option>
          <option>United Kingdom</option>
        </select>
      </div>
    </div>
    <span class="c-divider u-mv-medium"></span>
    <h6 class="col-12 mb-3">Step 3 - Account Information</h6>
    <div class="col-md-12">
      <div class="c-field">
        <label class="c-field__label">Prefered State of Operation</label>
        <select class="c-input" id="user-country">
          <option>Australia</option>
          <option>Singapore</option>
          <option>United Stated</option>
          <option>United Kingdom</option>
        </select>
        <div class="c-note u-mb-small mt-1">
          <span class="c-note__icon">
            <i class="feather icon-info"></i>
          </span>
          <p>This is the state that will be used to serve you information on iBorrow. You are can only perform operation form your prefered state.</p>
        </div>
      </div>
    </div>
    <span class="c-divider u-mv-medium"></span>
    <h6 class="col-12 mb-3">Terms of use</h6>
    <div class="col-12">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="c-field u-mb-xsmall">
      <label class="c-switch">
        <input class="c-switch__input" type="checkbox" >
        <span class="c-switch__label">I read and understand the  <b>terms of use</b></span>
      </label>
    </div>
    <span class="c-divider u-mv-medium"></span>
    <div class="col-12 ">
      <button class="c-btn c-btn--info">Create My Account</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'investors-form'
}
</script>
