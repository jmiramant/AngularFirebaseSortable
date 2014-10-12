'use strict'

angular.module('angularSorterApp').factory 'InstaPics', ['$http', ($http) ->
  fetchPopular: (callback) ->
    endPoint = 'https://api.instagram.com/v1/media/popular?'
    endPoint += 'lat=37.7833&lng=122.4167'
    endPoint += '&client_id=b99a57c7a73542a58c2b84fc2dfdf4e6'
    endPoint += '&callback=JSON_CALLBACK'
    $http.jsonp(endPoint).success (resp) -> 
      callback resp.data
]