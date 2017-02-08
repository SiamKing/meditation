(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UserController', ['UserService', '$stateParams', '$scope', '$state', function(UserService, $stateParams, $scope, $state) {
      var vm = this;
      vm.createUser = createUser;

      UserService.all()
        .then(data => $scope.users = data)

        if ($stateParams.id) {
          UserService.getUser($stateParams.id)
            .then(data => vm.game = data)
        }

        function createUser(userInfo) {
          UserService
            .create(vm.user)
            .then(user => $scope.$parent.users.push(user))
            $state.go('user')
        }
    }])
}())
