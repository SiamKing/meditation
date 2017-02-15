(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['HttpService', '$state', '$stateParams', '$scope', function(HttpService, $state, $stateParams, $scope) {
      var vm = this;
      vm.createUser = createUser;
      vm.enlightenmentPoints = enlightenmentPoints;
      vm.hideLink = false;
      vm.hideDiv = hideDiv;

      HttpService.all('users')
        .then(data => vm.users = data)

        if($stateParams.userId) {
          HttpService.getObject('users', $stateParams.userId)
            .then(data => vm.user = data)
            .then(data => vm.points = vm.enlightenmentPoints(data))
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

      function enlightenmentPoints(user) {
        return getMinutes(user).reduce(function(a, b) {
          return a + b;
        }, 0);
      }

      function getMinutes(user) {
        return user.events.map(function(event) {
          return event.minutes
        })
      }

      function hideDiv() {
        return vm.hideLink = true;
      }

    }])
}())
