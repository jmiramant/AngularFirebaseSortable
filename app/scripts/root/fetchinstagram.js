(function() {
  'use strict';
  angular.module('angularSorterApp').factory('InstaPics', [
    '$http', function($http) {
      return {
        fetchPopular: function(callback) {
          var endPoint;
          endPoint = 'https://api.instagram.com/v1/media/popular?';
          endPoint += 'lat=37.7833&lng=122.4167';
          endPoint += '&client_id=b99a57c7a73542a58c2b84fc2dfdf4e6';
          endPoint += '&callback=JSON_CALLBACK';
          return $http.jsonp(endPoint).success(function(resp) {
            return callback(resp.data);
          });
        }
      };
    }
  ]);

}).call(this);
