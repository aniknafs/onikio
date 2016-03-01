'use strict';

angular.module('onikioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('support', {
        url: '/support',
        templateUrl: 'app/support/support.html',
        controller: 'SupportCtrl'
      });
  });
