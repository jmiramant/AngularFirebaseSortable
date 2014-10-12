'use strict';
angular.module('angularSorterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = {
      name: ['HTML5 Boilerplate',
      'AngularJS',
      'ng-sortable',
      'Firebase',
      'Karma']
    };
  });
