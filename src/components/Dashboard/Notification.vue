
<template>
<div class="c-dropdown dropdown u-mr-medium">
    <div class="c-notification has-indicator dropdown-toggle" id="dropdownMenuToggle2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
        <i class="c-notification__icon feather icon-bell"></i>
    </div>

    <div class="c-dropdown__menu c-dropdown__menu--large has-arrow dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuToggle2">
        <span class="c-dropdown__menu-header">
        Notifications
        </span>
        <a class="c-dropdown__menu-footer">
        All Notifications
        </a>
    </div>
</div>
</template>

<script>
export default {
  name: 'notification-dropdown'
}
</script>
