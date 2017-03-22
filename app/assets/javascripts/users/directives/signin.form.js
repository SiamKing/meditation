(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('signInForm', function() {
      return {
        templateUrl: 'users/templates/signin.form.html',
        controller: 'UsersController'
      }
    })
}())
