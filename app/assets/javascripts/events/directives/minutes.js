(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('minutes', function() {
      return {
        scope: true,
        bindToController: true,
        template: [
          `<div class="col-md-3 form-group" ng-class="{ 'has-error': form.minutes.$touched && form.minutes.$invalid}">
            <input ng-if="!event.event.minutes"
                   type="number" min="1"
                   class="form-control minutes"
                   name="minutes"
                   placeholder="Minutes Meditating"
                   ng-model="event.minutes"
                   required="required">
            <input ng-if="event.event.minutes"
                   type="number" min="1"
                   class="form-control minutes"
                   name="minutes"
                   placeholder="{{event.event.minutes}} minutes"
                   ng-model="event.minutes"
                   required="required">
            <div class="message-alert" ng-show="form.minutes.$touched && form.minutes.$invalid" ng-messages="form.minutes.$error" role="alert">
              <div ng-message="required" style="align: 'center'">Please enter minutes</div>
            </div>
          </div>`
        ],
        controller: 'EventsController'
      }
    })
}())
