(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('signUpForm', function() {
      return {
        templateUrl: 'users/templates/signup.form.html',
        controller: 'UsersController'
      }
    })
}())
