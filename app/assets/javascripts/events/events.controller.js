(function() {
  "use strict";

  angular
    .module('meditation')
    .controller('EventsController', ['HttpService', '$stateParams', '$state', '$scope', function(HttpService, $stateParams, $state, $scope) {

      var vm = this;
      vm.deleteEvent = deleteEvent;
      vm.addEvent = addEvent;
      vm.updateEvent = updateEvent;
      vm.date = new Date();
      // if ($stateParams.id) {
      //   HttpService.getObject('events', $stateParams.id)
      //     .then(function(data) {
      //       vm.event = data;
      //     });
      // }

      vm.setMeditationId = function(meditationId) {
        vm.meditationId = meditationId;
      }

      vm.meditationSelected = function (meditation) {
        vm.selectedMeditation = meditation;
      }

      if ($stateParams.id) {
        HttpService
          .getObject('events', $stateParams.id)
          .then(function(event) {
            vm.event = event;
            vm.event.date = new Date(vm.event.date);
          });
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
          .then(data => vm.event.id = data.data.id)
          $scope.$parent.vm.user.meditations.push(meditation);
          $scope.$parent.vm.user.events.push(vm.event);
          $scope.$parent.vm.points += parseInt(vm.minutes);
          vm.minutes = '';
          $scope.$$childHead.selectedMeditation = $scope.$$childHead.vm.meditations[0].name;
          $scope.$$childTail.vm.valuationDate = new Date();
          $scope.form.$setPristine();
          $scope.form.$setUntouched();
      }

      function updateEvent() {
        let meditationName = $scope.event.selectedMeditation;
        let meditationId = $scope.event.meditationId;
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
          .updateEvent(vm.event, $stateParams.id)
          .then((data) => {
          vm.event.id = data.data.id
          var index;
          var eventIndex = $scope.$parent.vm.user.events.some(function(event, i) {
            if (event.id === parseInt($stateParams.id)) {
            return (index = i);
            }
          });
          // var currentEvents = $scope.$parent.vm.user.events.filter(event => event.id !== parseInt($stateParams.id));
          // var currentMeditations = $scope.$parent.vm.user.meditations.slice(eventIndex, 1)
          // currentEvents.push(vm.event)
          // currentMeditations.push(meditation)
          $scope.$parent.vm.user.meditations.splice(index, 1, meditation);
          $scope.$parent.vm.user.events.splice(index, 1, vm.event);
          $scope.$parent.vm.points -= $scope.$parent.event.event.minutes;
          $scope.$parent.vm.points += parseInt(vm.minutes);
          $scope.$parent.vm.hideLink = false;

          $state.go('user')
        });
      }

      function deleteEvent() {
        HttpService
          .destroy('events', $stateParams.id)
          .then(() => {
            var currentEvents = $scope.$parent.vm.user.events.filter(event => event.id !== parseInt($stateParams.id));
            $scope.$parent.vm.user.events = currentEvents;
            $scope.$parent.vm.hideLink = false;
            $state.go('user');
          })

      }

    }])
}())
