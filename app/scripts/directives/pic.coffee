'use strict'
angular.module('angularSorterApp')
  .directive('pic', ->
    template: '<img class="{{layout}}" src="{{vids.images.low_resolution.url}}">'
    restrict: 'E'
  )
