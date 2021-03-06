(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('UsersController', ['HttpService', '$state', '$stateParams', '$scope', 'Auth', '$rootScope', '$localStorage', 'toaster', function(HttpService, $state, $stateParams, $scope, Auth, $rootScope, $localStorage, toaster) {
      var vm = this;
      vm.enlightenmentPoints = enlightenmentPoints;
      vm.hideCalendarBtn = false;
      vm.hideCalendarEventBtn = hideCalendarEventBtn;
      $rootScope.showCalendarEventBtn = showCalendarEventBtn;
      vm.login = login;
      vm.signIn = false;
      vm.showSignIn = showSignIn;
      vm.signUp = false;
      vm.showSignUp = showSignUp;
      vm.register = register;
      $rootScope.$storage = $localStorage;
      vm.sortMeditation = sortMeditation;
      vm.sortDate = sortDate;
      vm.sortBy = sortBy;
      vm.sortMinutes = sortMinutes;
      vm.sortZen = sortZen;

      function sortZen() {
        return vm.user.events = vm.user.events.filter(v => v.meditation.name === "Zen Meditation");
      }

      vm.options = ["Date (Asc)", "Date (Desc)", "Meditation", "Minutes (Asc)", "Minutes (Desc)"];

      function sortBy() {
        if (vm.selectedOption === vm.options[0]) {
          vm.sortDate();
        } else if (vm.selectedOption === vm.options[1]) {
          vm.sortDate();
          vm.user.events.reverse();
        } else if (vm.selectedOption === vm.options[2]) {
          vm.sortMeditation();
        } else if (vm.selectedOption === vm.options[3]) {
          vm.sortMinutes();
        } else if (vm.selectedOption === vm.options[4]) {
          vm.sortMinutes();
          vm.user.events.reverse();
        }
      };

      function sortMinutes() {
        vm.user.events.sort((a, b) => parseInt(a.minutes) - parseInt(b.minutes))
      }

      function sortDate() {
        vm.user.events.sort((a, b) => (new Date(a.date)) - (new Date(b.date)));
      }

      function sortMeditation() {
        vm.user.events.sort((a, b) => {
          if (a.meditation.name < b.meditation.name) {
            return -1;
          } else if (a.meditation.name > b.meditation.name) {
            return 1;
          } else {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);

            if (dateA < dateB) {
              return -1;
            } else if (dateA > dateB) {
              return 1;
            } else {
              return 0;
            }
          }
        })
      }

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
        toaster.pop('success', 'Welcome ' + vm.user.username + '!');
      }

      //  Register
      function register() {
        Auth.register(vm.userForm, config)
          .then(function(user) {
            signInHelper(user);
          }, function(error) {
            if (error.data.errors.email !== undefined) {
              toaster.pop('error', 'Email has already been used', 'Please try another one')
            } else {
              toaster.pop('error', 'Username has already been taken', 'Please try another one')
            }
          });
      }

      // Gets current User json if they are signed in
      if ($stateParams.userId && $rootScope.$storage.currentUserSignedIn) {
        if (parseInt($stateParams.userId) === $rootScope.$storage.currentUser.id) {
          HttpService.getObject('users', $stateParams.userId)
            .then((data) => {
              vm.user = data;
              vm.points = vm.enlightenmentPoints(data);
              vm.sortDate();
              vm.user.events.reverse();
            })
          } else {
            $state.go('user', {userId: $rootScope.$storage.currentUser.id})
          }
      } else {
        $state.go('users');
      }

      function enlightenmentPoints(user) {
        console.log(user.events.length )
        return user.events.length !== 0 ? getMinutes(user).reduce((a, b) => a + b) : 0;
      }

      function getMinutes(user) {
        return user.events.map(function(event) {
          return event.minutes
        })
      }

      function hideCalendarEventBtn() {
        return vm.hideCalendarBtn = true;
      }

      function showCalendarEventBtn() {
        return vm.hideCalendarBtn = false;
      }

    }])
}())
