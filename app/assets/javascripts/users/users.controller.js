(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['HttpService', '$state', '$stateParams', '$scope', function(HttpService, $state, $stateParams, $scope) {
      var vm = this;
      vm.addEvent = addEvent;
      vm.createUser = createUser;
      vm.enlightenmentPoints = enlightenmentPoints;

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

      function addEvent() {
        vm.event = {
          date: $scope.$$childTail.vm.valuationDate,
          minutes: vm.minutes,
          user_id: $stateParams.userId,
          meditation_id: $scope.$$childHead.vm.meditationId
        }
        HttpService
          .addEvent(vm.event)
          .then(event => vm.user.events.push(event))
          .then(event => console.log($scope))
          $state.go('user', {userId: vm.event.user_id})
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

    }])
}())
