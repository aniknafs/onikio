'use strict';

angular.module('onikioApp', [
        'onikioApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngMaterial'
        // 'ngMdIcons'
    ])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
