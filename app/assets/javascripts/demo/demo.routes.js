(function () {
    "use strict";

    angular
        .module('meditation')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('demo', {
                    url: '/demo',
                    templateUrl: 'demo/templates/demo.html',
                    controller: 'DemoController as vm'
                });

        }])
}())
