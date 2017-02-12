(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['HttpService', '$state', '$stateParams', '$scope', function(HttpService, $state, $stateParams, $scope) {
      var vm = this;
      vm.addEvent = addEvent;
      vm.createUser = createUser;
      vm.enlightenmentPoints = enlightenmentPoints;
      vm.hideLink = false;
      vm.hideDiv = hideDiv;
      // vm.getUser = getUser;

      HttpService.all('users')
        .then(data => vm.users = data)

        if($stateParams.userId) {
          HttpService.getObject('users', $stateParams.userId)
            .then(data => vm.user = data)
            .then(data => vm.points = vm.enlightenmentPoints(data))
        }
      // function getUser() {
      //   console.log("getUser")
      //   HttpService.getObject('users', $stateParams.userId)
      //     .then(function(data) {
      //       vm.user = data;
      //
      //     })
      //     .then(data => console.log(data))
      //     .then(data => vm.points = vm.enlightenmentPoints(data)
      //   )
      //   vm.hideLink = false;
      //   console.log(vm.user)
      //   return vm.user
      // }

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
        let meditationName = $scope.$$childHead.selectedMeditation;
        let meditationId = $scope.$$childHead.vm.meditationId;
        let meditation = {
          id: meditationId,
          name: meditationName
        }
        vm.event = {
          date: $scope.$$childTail.vm.valuationDate,
          minutes: vm.minutes,
          user_id: $stateParams.userId,
          meditation_id: meditationId
        }
        HttpService
          .addEvent(vm.event)
          .then(function(event) {
            $scope.$parent.vm.user.meditations.push(meditation);
            $scope.$parent.vm.user.events.push(vm.event);
          });
          vm.minutes = ''
          $scope.$$childHead.selectedMeditation = "Meditations"
          $scope.$$childTail.vm.valuationDate = new Date();
          $scope.form.$setPristine();
          $scope.form.$setUntouched();
          // console.log($scope.form.$$element)
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
