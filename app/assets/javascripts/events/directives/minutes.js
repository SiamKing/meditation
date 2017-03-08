(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('minutes', function() {
      return {
        scope: true,
        template: [
          `<div class="col-md-3 form-group" ng-class="{ 'has-error': form.minutes.$touched && form.minutes.$invalid}">
            <input ng-if="!event.event.minutes" type="number" class="form-control minutes" name="minutes" placeholder="Minutes Meditating" ng-model="event.minutes" required="required">
            <input ng-if="event.event.minutes" type="number" class="form-control minutes" name="minutes" placeholder="{{event.event.minutes}}" ng-model="event.event.minutes" required="required">
            <div ng-if="form.minutes.$invalid && form.minutes.$dirty" ng-messages="form.minutes.$error">
              <div ng-message="required">Minutes are required</div>
            </div>
          </div>`
        ],
        controller: 'EventsController'
      }
    })
}())
