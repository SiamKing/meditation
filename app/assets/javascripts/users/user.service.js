(function (){
  'use strict';

  angular
    .module('meditation')
    .factory('UserService', ['$http', function($http) {
      return {
        all
      }

      function all() {
        return $http.get('/api/v1/users')
          .then(response => response.data)
          .catch(err => console.log(err))
      }
    }])

}())
