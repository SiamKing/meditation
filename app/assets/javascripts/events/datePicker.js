(function() {

  angular
    .module('meditation')
    .controller('DatePickerController', ['$scope', '$stateParams', function ($scope, $stateParams) {
      var vm = this;

      vm.valuationDate = new Date();
      vm.valuationDatePickerIsOpen = false;
      vm.opens = [];

      $scope.$watch(function () {
           return vm.valuationDatePickerIsOpen;
       },function(value){
          vm.opens.push("valuationDatePickerIsOpen: " + value + " at: " + new Date());
       });

      vm.valuationDatePickerOpen = function ($event) {

          if ($event) {
              $event.preventDefault();
              $event.stopPropagation(); // This is the magic
          }
          this.valuationDatePickerIsOpen = true;
        }
    }]);

}())
