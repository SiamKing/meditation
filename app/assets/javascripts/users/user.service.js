(function (){
  'use strict';

  angular
    .module('meditation')
    .factory('UserService', ['$http', function($http) {
      return {
        all,
        getUser,
        create
      }

      function all() {
        return $http.get('/api/v1/users')
          .then(response => response.data)
          .catch(err => console.log(err))
      }

      function getUser(id) {
        return $http.get('api/v1/users/' + id)
          .then(response => response.data)
          .catch(err => console.log(err))
      }

      function create(userInfo) {
        const req = {
          method: 'POST',
          url: '/api/v1/users',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            user: userInfo
          }
        }
        return $http(req)
          .then(response => response.data)
          .catch(err => console.log(err))
      }

    }])
}())
