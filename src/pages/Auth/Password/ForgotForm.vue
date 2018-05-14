<template>
  <div>
    <form>
      <div class="c-field">
        <label class="c-field__label">Email Address</label>
        <input class="c-input u-mb-small" type="email" placeholder="e.g. adam@sandler.com" required>
      </div>
      <div class="c-note u-mb-small">
        <span class="c-note__icon">
        <i class="feather icon-info"></i>
        </span>

        <p>After submitting you email address you will receive password reset instructions.</p>
      </div>
      <button class="c-btn c-btn--fullwidth c-btn--info">Send Instruction</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'forgot-form'
}
</script>
