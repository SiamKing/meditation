(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['HttpService', '$state', '$stateParams', '$scope', 'Auth', '$rootScope', '$localStorage', '$sessionStorage', 'toaster', function(HttpService, $state, $stateParams, $scope, Auth, $rootScope, $localStorage, $sessionStorage, toaster) {
      var vm = this;
      vm.enlightenmentPoints = enlightenmentPoints;
      vm.hideLink = false;
      vm.hideDiv = hideDiv;
      vm.login = login;
      vm.signIn = false;
      vm.showSignIn = showSignIn;
      vm.signUp = false;
      vm.showSignUp = showSignUp;
      vm.register = register;
      $rootScope.$storage = $localStorage;

      function showSignIn() {
        vm.signIn = true;
        vm.signUp = false;
      }

      function showSignUp() {
        vm.signUp = true;
        vm.signIn = false;
      }

      // Login
      var config = {
          headers: {
              'X-HTTP-Method-Override': 'POST'
          }
      };

      function login() {
        Auth.login(vm.userForm, config)
          .then(function(user){
            signInHelper(user);
          }, function(error) {
            toaster.pop('error', 'Wrong email/password combination!', 'Take a breath and try again')
          })
      }

      function signInHelper(user) {
        vm.user = user;
        $rootScope.$storage.currentUserSignedIn = true;
        $rootScope.$storage.currentUser = user;
        $state.go('user', {userId: vm.user.id});
        toaster.pop('success', `Welcome ${vm.user.username}!`);
      }

      //  Register
      function register() {
        Auth.register(vm.userForm, config)
          .then(function(user) {
            signInCallback(user);
          }, function(error) {
            if (error.data.errors.email !== undefined) {
              toaster.pop('error', 'Email has already been used', 'Please try another one')
            } else {
              toaster.pop('error', 'Username has already been taken', 'Please try another one')
            }
          });
      }

      // $scope.$on('devise:new-registration', function(event, user) {
      //   vm.user = user; // => {id: 1, ect: '...'}
      //   $rootScope.$storage.currentUserSignedIn = true;
      //   $rootScope.$storage.currentUser = user;
      //   $state.go('user', {userId: vm.user.id});
      // });

      // var configLogout = {
      //     headers: {
      //         'X-HTTP-Method-Override': 'DELETE'
      //     }
      // }

      $rootScope.logout = function() {
        Auth.logout(config).then(function(oldUser) {
          vm.user = {};
          $rootScope.$storage.currentUserSignedIn = false;
          $rootScope.$storage.currentUser = {};
          toaster.pop('success', 'You have been logged out successfully', 'Namaste!')
        }, function(error) {
            toaster.pop('error', 'An error occurred', 'Please try again')
        });
      }


    //   $rootScope.$on('devise:logout', function(event, oldCurrentUser) {
    //      vm.user = {};
    //      $rootScope.$storage.currentUserSignedIn = false;
    //      $rootScope.$storage.currentUser = {};
    //  });

      if ($stateParams.userId && $rootScope.$storage.currentUserSignedIn) {
        if (parseInt($stateParams.userId) === $rootScope.$storage.currentUser.id) {
          HttpService.getObject('users', $stateParams.userId)
            .then((data) => {
              vm.user = data;
              vm.points = vm.enlightenmentPoints(data);
            })
          } else {
            $state.go('user', {userId: $rootScope.$storage.currentUser.id})
          }
      } else {
        $state.go('users');
      }

      function enlightenmentPoints(user) {
        return getMinutes(user).reduce(function(a, b) {
          return a + b;
        }, 0);
      }

      function getMinutes(user) {
        return user.events.map(function(event) {
          return event.minutes
        })
      }

      function hideDiv() {
        return vm.hideLink = true;
      }

    }])
}())
