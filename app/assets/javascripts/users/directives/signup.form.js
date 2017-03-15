(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('signUpForm', function() {
      return {
        template: [
          `<form name="form" ng-show="vm.signUp" class="input-group" ng-submit="vm.register()" novalidate>
            <div class="form-width" ng-class="{ 'has-error': form.username.$touched && form.username.$invalid}">
              <input class="form-control transparent-input"
                    name="username"
                    placeholder="Username"
                    type="text"
                    ng-model="vm.userForm.username"
                    required="required"
                    ng-minlength="3"
                    ng-maxlength="20">
              <div class="message-alert" ng-messages="form.username.$error" ng-show="form.username.$touched" role="alert">
                <p ng-message="minlength">Your name is too short</p>
                <p ng-message="maxlength">Your name is too long</p>
                <p ng-message="required">Username is Required</p>

              </div>
            </div>
            <div class="form-width" ng-class="{ 'has-error': form.email.$touched && form.email.$invalid}">
              <input class="form-control transparent-input"
                    placeholder="Email"
                    name="email"
                    type="email"
                    ng-model="vm.userForm.email"
                    required="required">
              <div class="message-alert" ng-show="form.email.$touched" ng-messages="form.email.$error" role="alert">
                <p ng-message="required">Email is Required</p>
                <p ng-message="email">Must be a valid email address</p>
              </div>
            </div>

            <div class="form-width" ng-class="{ 'has-error': form.password.$touched && form.password.$invalid}">
              <input class="form-control transparent-input"
                    placeholder="Password"
                    name="password"
                    type="password"
                    ng-model="vm.userForm.password"
                    required="required"
                    ng-minlength="8"
                    ng-maxlength="20">
              <div class="message-alert" ng-show="form.password.$touched" ng-messages="form.password.$error" role="alert">
                <p ng-message="required">Password is Required</p>
                <p ng-message="minlength">Password must be at least 8 characters</p>
                <p ng-message="maxlength">Password must be less than 20 characters</p>
              </div>
            </div>
            <input class="transparent-input submit-button" style="text-transform: uppercase" type="submit" ng-disabled="form.$invalid" value="Submit">
          </form>`
        ],
        controller: 'UsersController'
      }
    })
}())
