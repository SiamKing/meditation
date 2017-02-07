(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UserController', ['UserService', '$stateParams', '$scope', '$state', function(UserService, $stateParams, $scope, $state) {
      var vm = this;

      UserService.all()
        .then(data => $scope.games = data)
    }])
}())
