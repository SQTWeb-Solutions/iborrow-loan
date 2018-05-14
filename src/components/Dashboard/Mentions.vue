<template>
<div class="c-dropdown dropdown u-mr-small">
    <div class="c-notification dropdown-toggle" id="dropdownMenuToggle1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
        <i class="c-notification__icon feather icon-message-circle"></i>
    </div>

    <div class="c-dropdown__menu c-dropdown__menu--large has-arrow dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuToggle1">

        <span class="c-dropdown__menu-header">
        Mentions
        </span>

        <a class="c-dropdown__menu-footer">
        All Mentions
        </a>
    </div>
</div>
</template>

<script>
export default {
  name: 'mentions-dropdown'
}
</script>
