(function() {
  "use strict";

  angular
    .module('meditation')
    .controller('MeditationsController', ['HttpService', function(HttpService){
      var vm = this;

      HttpService.all('meditations')
        .then(data => vm.meditations = data)

    }])
}())
