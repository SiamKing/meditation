(function() {
  "use strict";

  angular
    .module('meditation')
    .controller('MeditationsController', ['HttpService', '$stateParams', function(HttpService, $stateParams){
      var vm = this;

      HttpService.all('meditations')
        .then(data => vm.meditations = data)

        if ($stateParams.id) {
          HttpService.getObject('meditations', $stateParams.id)
            .then(data => vm.user = data)
        }
    }])
}())
