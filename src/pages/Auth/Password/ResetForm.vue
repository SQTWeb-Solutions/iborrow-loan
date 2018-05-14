<template>
  <div>
    <form>
      <div class="c-field">
        <label class="c-field__label">Email Address</label>
        <input class="c-input u-mb-small" type="email" placeholder="e.g. adam@sandler.com" required>
      </div>
      <div class="c-field">
        <label class="c-field__label">Password</label>
        <input class="c-input u-mb-small" type="password" placeholder="Numbers, Pharagraphs Only" required>
      </div>
      <div class="c-field">
        <label class="c-field__label">Confirm Password</label>
        <input class="c-input u-mb-small" type="password" placeholder="Confirm your password" required>
      </div>
      <button class="c-btn c-btn--fullwidth c-btn--info">Reset Password</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'reset-form'
}
</script>
