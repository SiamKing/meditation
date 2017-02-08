(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['HttpService', '$state', '$stateParams', '$scope', function(HttpService, $state, $stateParams, $scope) {
      var vm = this;

      vm.createUser = createUser;

      HttpService.all('users')
        .then(data => vm.users = data)

        if($stateParams.userId) {
          HttpService.getObject('users', $stateParams.userId)
            .then(data => vm.user = data)
        }


      function createUser(userInfo) {
        HttpService
          .create('users', vm.user)
          .then(user => vm.users.push(user))
          .then(function(user) {
            var user = user;
            $state.go('user', {userId: user})
          })
      }

    }])
}())
