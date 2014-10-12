(function() {
  'use strict';
  angular.module("angularSorterApp").controller("ContactCtrl", function($scope) {
    return $scope.myInfo = {
      GitHub: 'https://github.com/jmiramant',
      Website: 'http://www.miramant.me',
      Email: 'mailto:josh@miramnt.me?Subject=Found%20You%20Through%20Your%20FireBase%20App'
    };
  });

}).call(this);
