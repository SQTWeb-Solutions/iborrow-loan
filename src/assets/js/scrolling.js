//
// Scrolling function
//
/* eslint-disable*/
'use strict'

import $ from 'jquery'

var Scroll = () => {
  var $window = $(window)
  var $document = $(document)
  $window.on('scroll', function() {
    if ($window.scrollTop() + $window.height() > $document.height() - 50) {
      return true
    }
  })

  return false
}

export default Scroll
