(function() {
  'use strict';

  angular
    .module('meditation', ['ui.router', 'templates', 'ui.bootstrap', 'ngMessages'])
    .config(["$httpProvider", function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }])

}())
