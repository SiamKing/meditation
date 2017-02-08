(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['users', 'user', 'HttpService', '$state', function(users, user, UserService, $state) {
      var vm = this;
      vm.users = users;
      vm.user = user;
      vm.createUser = createUser;

      function createUser(userInfo) {
        HttpService
          .create(vm.user)
          .then(user => vm.users.push(user))
          .then(function(user) {
            var user = user;
            $state.go('user', {userId: user})
          })
      }

    }])
}())
