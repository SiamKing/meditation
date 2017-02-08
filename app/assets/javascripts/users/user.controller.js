(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UserController', ['UserService', '$stateParams', '$scope', '$state', function(UserService, $stateParams, $scope, $state) {
      var vm = this;

      UserService.all()
        .then(data => $scope.users = data)

        if ($stateParams.id) {
          UserService.getUser($stateParams.id)
            .then(data => vm.game = data)
        }
    }])
}())
