<template>
  <div>
    <form>
      <div class="c-field">
        <label class="c-field__label">Email Address/username</label>
        <input class="c-input u-mb-small" type="email" placeholder="e.g. adam@sandler.com" required>
      </div>

      <div class="c-field">
        <label class="c-field__label">Password</label>
        <input class="c-input u-mb-small" type="password" placeholder="Numbers, Pharagraphs Only" required>
      </div>
      <router-link :to="{ name: 'auth.create.account' }" class="mb-2 d-flex">Forgot Password?</router-link>
      <button class="c-btn c-btn--fullwidth c-btn--info">Login</button>
    </form>
  </div>
</template>
// TODO: Change the forgot password link
<script>
export default {
  name: 'login-form'
}
</script>
