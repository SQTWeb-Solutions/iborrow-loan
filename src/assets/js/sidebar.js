//
// Sidebar
//
/* eslint-disable*/
'use strict'

import $ from 'jquery'

var Sidebar = () => {
  var $document = $(document)
  var $page = $('.o-page')
  var $sidebar = $('.js-page-sidebar')
  var $sidebarToggle = $('.js-sidebar-toggle')

  $document.on('click', '.js-sidebar-toggle', function (e) {
    $page.toggleClass('is-sidebar-open')
    return false
  })

  $document.on('click', function (e) {
    var $target = $(e.target);
    if (!$target.closest($sidebar).length) {
      $page.removeClass('is-sidebar-open')
    }
  })
}

export default Sidebar
