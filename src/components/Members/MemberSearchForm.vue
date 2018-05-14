<template>
  <form class="c-search-form c-search-form--dark">

      <h5 class="c-search-form__label">Sort By</h5>
      <div class="c-search-form__section u-flex">
          <div class="c-choice c-choice--radio u-mr-small">
              <input class="c-choice__input" id="radio1" name="radios" type="radio">
              <label class="c-choice__label" for="radio1">Name(ASC)</label>
          </div>
          <div class="c-choice c-choice--radio">
              <input class="c-choice__input" id="radio2" name="radios" type="radio">
              <label class="c-choice__label" for="radio2">Name(DESC)</label>
          </div>
      </div>
      <h5 class="c-search-form__label">Only</h5>
      <div class="c-search-form__section">
          <div class="c-choice c-choice--checkbox">
              <input class="c-choice__input" id="checkbox1" name="checkboxes" type="checkbox">
              <label class="c-choice__label" for="checkbox1">In Your Connections</label>
          </div>
          <div class="c-choice c-choice--checkbox">
              <input class="c-choice__input" id="checkbox2" name="checkboxes" type="checkbox">
              <label class="c-choice__label" for="checkbox2">Available to lend</label>
          </div>
          <div class="c-choice c-choice--checkbox">
              <input class="c-choice__input" id="checkbox3" name="checkboxes" type="checkbox">
              <label class="c-choice__label" for="checkbox3">Active Users</label>
          </div>
      </div>
      <div class="c-search-form__section">
          <div class="c-field has-icon-left">
              <span class="c-field__icon"><i class="feather icon-map-pin"></i></span>
              <label class="c-field__label c-search-form__label" for="search-location">Location</label>
              <input class="c-input" id="search-location" type="text" placeholder="All">
              <small class="c-field__message">Enter a city, state</small>
          </div>
      </div>

      <div class="c-search-form__section">
          <div class="c-field has-icon-left">
              <span class="c-field__icon"><i class="feather icon-user"></i></span>
              <label class="c-field__label c-search-form__label" for="search-position">Username</label>
              <input class="c-input" id="search-position" type="text" placeholder="Any">
              <small class="c-field__message">Use commas for multiple username</small>
          </div>
      </div>

      <button class="c-btn c-btn--info c-btn--fullwidth" type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: 'member-search-form'
}
</script>
