(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['HttpService', '$state', '$stateParams', '$scope', 'Auth', function(HttpService, $state, $stateParams, $scope, Auth) {
      var vm = this;
      vm.enlightenmentPoints = enlightenmentPoints;
      vm.hideLink = false;
      vm.hideDiv = hideDiv;
      vm.logout = Auth.logout;
      vm.login = login;
      vm.signIn = false;
      vm.showSignIn = showSignIn;
      vm.signUp = false;
      vm.showSignUp = showSignUp;
      vm.register = register;

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
            vm.user = user;
            $state.go('user', {userId: user.id})
          }, function(error) {

          })
      }

      Auth.currentUser().then(function(user) {
        vm.user = user;
      }, function(error) {

      });

      //  Register
      function register() {
        Auth.register(vm.userForm, config)
          .then(function(registeredUser) {
              vm.user = registeredUser; // => {id: 1, ect: '...'}
              $state.go('user');
          }, function(error) {
              // Registration failed...
          });
      }


        $scope.$on('devise:new-registration', function(event, user) {
            // ...
        });



        var configLogout = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
          }

        $scope.$on('devise:logout', function(event, oldCurrentUser) {
           vm.user = {};
       });


      // HttpService.all('users')
      //   .then(data => vm.users = data)

        if($stateParams.userId) {
          HttpService.getObject('users', $stateParams.userId)
            .then(data => vm.user = data)
            .then(data => vm.points = vm.enlightenmentPoints(data))
        }

      // function createUser(userInfo) {
      //   HttpService
      //     .create('users', vm.user)
      //     .then(user => vm.users.push(user))
      //     .then(function(user) {
      //       var user = user;
      //       $state.go('user', {userId: user})
      //     })
      // }

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
