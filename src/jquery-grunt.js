/*
 * jquery-grunt
 * https://github.com/chrisf/jquery-grunt
 *
 * Copyright (c) 2013 Chris Francis
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };
  
  // test foo
  function foo() {
	return "bar";
  }

}(jQuery));
