(function() {
  "use strict";

  angular
    .module('meditation')
    .controller('EventsController', ['HttpService', '$stateParams', '$state', '$scope', function(HttpService, $stateParams, $state, $scope) {

      var vm = this;
      vm.deleteEvent = deleteEvent;

      if ($stateParams.id) {
        HttpService.getObject('events', $stateParams.id)
          .then(function(data) {
            vm.event = data;
            console.log(data)
          });
      }

      function deleteEvent() {
        console.log($stateParams)
        HttpService
          .destroy('events', $stateParams.id)
          .then(() => {
            console.log(parseInt($scope.$parent.vm.user.events[1].id) === parseInt($stateParams.id))
            console.log($stateParams.id)
            var currentEvents = $scope.$parent.vm.user.events.filter(event => event.id !== parseInt($stateParams.id));
            console.log(currentEvents)
            $scope.$parent.vm.user.events = currentEvents;
            $state.go('user');
          })

      }

    }])
}())
