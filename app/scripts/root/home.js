(function() {
  'use strict';
  angular.module("angularSorterApp").controller("HomeCtrl", function($scope, InstaPics) {
    $scope.layout = 'col-md-4';
    $scope.setLayout = function(layout) {
      layout = layout === 'grid' ? 'col-md-4' : '';
      return $scope.layout = layout;
    };
    $scope.isLayout = function(layout) {
      var current;
      current = layout === 'grid' ? 'col-md-4' : '';
      return $scope.layout === current;
    };
    InstaPics.fetchPopular(function(data) {
      return $scope.videos = data;
    });
    return $scope.refresh = function() {
      return InstaPics.fetchPopular(function(data) {
        return $scope.videos = data;
      });
    };
  });

}).call(this);
