(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['HttpService', '$state', '$stateParams', '$scope', 'Auth', function(HttpService, $state, $stateParams, $scope, Auth) {
      var vm = this;
      vm.createUser = createUser;
      vm.enlightenmentPoints = enlightenmentPoints;
      vm.hideLink = false;
      vm.hideDiv = hideDiv;
      vm.logout = Auth.logout;
      vm.login = login;
      vm.signIn = false;
      vm.showSignIn = showSignIn;
      vm.signUp = false;
      vm.showSignUp = showSignUp;

      function showSignIn() {
        vm.signIn = true;
      }

      function showSignUp() {
        vm.signUp = true;
      }

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



        var configLogout = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
          }

        // Auth.logout(configLogout).then(function(oldUser) {
        //     // alert(oldUser.name + "you're signed out now.");
        // }, function(error) {
        //     // An error occurred logging out.
        // });

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

      function createUser(userInfo) {
        HttpService
          .create('users', vm.user)
          .then(user => vm.users.push(user))
          .then(function(user) {
            var user = user;
            $state.go('user', {userId: user})
          })
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
