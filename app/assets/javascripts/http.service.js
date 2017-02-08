(function (){
  'use strict';

  angular
    .module('meditation')
    .factory('HttpService', ['$http', function($http) {
      return {
        all,
        getObject,
        create
      }

      function all(param) {
        return $http.get('/api/v1/' + param)
          .then(response => response.data)
          .catch(err => console.log(err))
      }

      function getObject(param, id) {
        return $http.get('api/v1/' + param + '/' + id)
          .then(response => response.data)
          .catch(err => console.log(err))
      }

      function create(param, info) {
        if (param === "users") {
          const req = {
            method: 'POST',
            url: '/api/v1/users',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              user: info
            }
          }
          return $http(req)
            .then(response => response.data)
            .catch(err => console.log(err))
        } else if (param === "meditations") {
          const req = {
            method: 'POST',
            url: '/api/v1/meditations',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              meditation: info
            }
          }
          return $http(req)
            .then(response => response.data)
            .catch(err => console.log(err))
        }

      }

    }])
}())
