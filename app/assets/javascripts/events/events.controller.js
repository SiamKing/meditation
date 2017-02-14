(function() {
  "use strict";

  angular
    .module('meditation')
    .controller('EventsController', ['HttpService', '$stateParams', '$state', '$scope', function(HttpService, $stateParams, $state, $scope) {

      var vm = this;
      vm.deleteEvent = deleteEvent;
      vm.addEvent = addEvent;

      if ($stateParams.id) {
        HttpService.getObject('events', $stateParams.id)
          .then(function(data) {
            vm.event = data;
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
          $scope.$parent.vm.points += parseInt(vm.minutes)
          vm.minutes = ''
          $scope.$$childHead.selectedMeditation = $scope.$$childHead.vm.meditations[0].name
          $scope.$$childTail.vm.valuationDate = new Date();
          $scope.form.$setPristine();
          $scope.form.$setUntouched();
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
