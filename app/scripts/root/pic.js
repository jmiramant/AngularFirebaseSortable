(function() {
  'use strict';
  angular.module('angularSorterApp').directive('pic', function() {
    return {
      template: '<img class="{{layout}}" src="{{vids.images.low_resolution.url}}">',
      restrict: 'E'
    };
  });

}).call(this);
