(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('datePicker', function() {
      return {
        template: [
          '<div class="col-sm-3 date-picker" ng-controller="DatePickerController as vm">',
              '<p class="input-group">',
                '<span class="input-group-btn">',
                  '<button type="button" class="btn btn-default" ng-click="vm.valuationDatePickerOpen($event)">',
                  '<i class="glyphicon glyphicon-calendar"></i>',
                '</button>',
              '</span>',
              '<input type="text" class="form-control minutes" uib-datepicker-popup="mediumDate" is-open="vm.valuationDatePickerIsOpen" ng-click="vm.valuationDatePickerOpen()" ng-model="vm.valuationDate" />',
              '</p>',
            '</div>'
        ].join(''),
        controller: 'DatePickerController'
      }
    })
}())
