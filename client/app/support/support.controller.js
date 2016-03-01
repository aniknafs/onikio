'use strict';

angular.module('onikioApp')
    .controller('SupportCtrl', function($scope) {
        $scope.user = {
            name: 'John Doe',
            email: '',
            phone: '',
            address: 'Mountain View, CA',
            donation: 19.99
        };
    });
