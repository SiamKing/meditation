(function() {
  "use strict";

  angular
    .module('meditation')
    .controller('EventsController', ['HttpService', '$stateParams', '$state', '$scope', '$rootScope', 'toaster', '$filter', function(HttpService, $stateParams, $state, $scope, $rootScope, toaster, $filter) {

      var vm = this;
      vm.deleteEvent = deleteEvent;
      vm.addEvent = addEvent;
      vm.updateEvent = updateEvent;
      vm.setMeditationId = setMeditationId;
      vm.meditationSelected = meditationSelected;

      function setMeditationId(meditationId) {
        vm.meditationId = meditationId;
      }

      function meditationSelected(meditation) {
        vm.selectedMeditation = meditation;
      }

      if ($stateParams.id) {
        HttpService
          .getObject('events', $stateParams.id)
          .then(event => {
            vm.event = event;
          });
      }

      function addEvent() {
        let meditationName = $scope.$$childTail.selectedMeditation;
        let meditationId = $scope.vm.meditationId;
        let meditation = {
          id: meditationId,
          name: meditationName
        }
        vm.event = {
          date: $scope.$$childHead.vm.valuationDate,
          minutes: vm.minutes,
          user_id: $rootScope.$storage.currentUser.id,
          meditation_id: meditationId
        }
        HttpService
          .addEvent(vm.event)
          .then(data => vm.event.id = data.data.id)
          vm.event.meditation = meditation;
          $scope.$parent.vm.user.events.push(vm.event);
          $scope.$parent.vm.points += parseInt(vm.minutes);
          $scope.$parent.vm.hideCalendarBtn = false;
          let formattedDate = $filter('date')(vm.event.date, "mediumDate")
          toaster.pop('success', `${meditation.name} on ${formattedDate} for ${vm.event.minutes} minutes has been added to calendar`);
          $state.go('user');
      }

      function updateEvent() {
        let meditationName = $scope.selectedMeditation;
        let meditationId = $scope.vm.meditationId;

        let meditation = {
          id: meditationId,
          name: meditationName
        }
        vm.event = {
          date: $scope.$$childHead.vm.valuationDate,
          minutes: vm.minutes,
          user_id: $stateParams.userId,
          meditation_id: meditationId
        }
        HttpService
          .updateEvent(vm.event, $stateParams.id)
          .then(data => {
          vm.event.id = data.data.id
          let eventIndex = $scope.$parent.vm.user.events.findIndex(event => event.id === parseInt($stateParams.id))
          vm.event.meditation = meditation;
          $scope.$parent.vm.user.events.splice(eventIndex, 1, vm.event);
          $scope.$parent.vm.points -= $scope.$parent.event.event.minutes;
          $scope.$parent.vm.points += parseInt(vm.event.minutes);
          $scope.$parent.vm.hideCalendarBtn = false;
          let formattedDate = $filter('date')(vm.event.date, "mediumDate")
          toaster.pop('success', `${meditation.name} on ${formattedDate} for ${vm.event.minutes} minutes has been updated`);
          $state.go('user')
        });
      }

      function deleteEvent() {
        let formattedDate = $filter('date')(vm.event.date, "mediumDate")
        let meditationName = vm.event.meditation.name;
        HttpService
          .destroy('events', $stateParams.id)
          .then(() => {
            var index = $scope.$parent.vm.user.events.findIndex(event => event.id === parseInt($stateParams.id))
            var currentEvents = $scope.$parent.vm.user.events.filter(event => event.id !== parseInt($stateParams.id));
            $scope.$parent.vm.user.events = currentEvents;
            $scope.$parent.vm.points -= $scope.event.event.minutes;
            $scope.$parent.vm.hideCalendarBtn = false;
            toaster.pop('success', `${meditationName} on ${formattedDate} has been deleted from the calendar`)
            $state.go('user', ({userId: $stateParams.userId}));
          })
      }

    }])
}())
