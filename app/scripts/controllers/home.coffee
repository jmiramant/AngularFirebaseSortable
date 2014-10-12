'use strict'

angular.module("angularSorterApp").controller "HomeCtrl", ($scope, InstaPics) ->

  $scope.layout = 'col-md-4'

  $scope.setLayout = (layout) ->
    layout = if layout is 'grid' then 'col-md-4' else ''
    $scope.layout = layout

  $scope.isLayout = (layout) -> 
    current = if layout is 'grid' then 'col-md-4' else ''
    $scope.layout is current

  InstaPics.fetchPopular (data) -> 
    $scope.videos = data

  $scope.refresh = -> 
    InstaPics.fetchPopular (data) -> $scope.videos = data