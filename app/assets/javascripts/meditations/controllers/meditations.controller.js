(function() {
  "use strict";

  angular
    .module('meditation')
    .controller('MeditationsController', ['HttpService', '$stateParams', '$location', '$scope', '$filter', function(HttpService, $stateParams, $location, $scope, $filter){
      var vm = this;
      vm.search = '';
      vm.filterTradition = '';

      HttpService.all('meditations')
        .then(data => vm.meditations = data)

        if ($stateParams.id) {
          HttpService
            .getObject('meditations', $stateParams.id)
            .then(data => vm.meditation = data)
        }

        vm.addEvent = function () {
          vm.event = {
            minutes: vm.event.minutes,
            meditation_id: vm.meditationId,
            user_id: $stateParams.userId,
            date: vm.valuationDate
          }
          HttpService
            .addEvent(vm.event)
            .then(event => vm.events.push(event))
            .then(vm.event = {})
        }

        vm.traditions = ['Buddhism', 'Hinduism', 'Taoism', 'Zen', 'Chinese', 'Western', 'Yogic', 'Confucianism']
    }])
}())
