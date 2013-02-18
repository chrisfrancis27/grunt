/*! jQuery Grunt - v0.1.0 - 2013-02-18
* https://github.com/chrisf/jquery-grunt
* Copyright (c) 2013 Chris Francis; Licensed MIT */

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
