'use strict';

angular.module('onikioApp')
    .controller('SupportCtrl', function($scope, $http, vcRecaptchaService) {
        $scope.emailData = {
            name: '',
            email: '',
            phone: '',
            body: ''
        };
        $scope.widgetId = null;
        $scope.recaptchaSolved = false;

        $scope.setResponse = function(response) {
            $scope.recaptchaSolved = true;
        };

        // $scope.sendMessage = function(isValid, $event, form) {
        $scope.sendMessage = function() {
            console.log('submitting: ' + JSON.stringify($scope.emailData));
            // $event.preventDefault();
            // if (!isValid) {
            //     vcRecaptchaService.reload($scope.widgetId);
            //     $scope.recaptchaSolved = false;
            //     $event.preventDefault();
            //     console.log('not valid');
            //     return;
            // };
            if ($scope.recaptchaSolved) {
                toastr.options = {
                    "positionClass": "toast-top-right",
                    "preventDuplicates": true
                        // "timeOut": "10000"
                };
                $http.post('/api/contacts', $scope.emailData)
                    .success(function(data, status, headers, config) {
                        toastr.success('Thank you! Your message has been sent successfully.');
                        console.log('msg sent');
                        $scope.emailData = {};
                    });
            } else {
                vcRecaptchaService.reload($scope.widgetId);
                $scope.recaptchaSolved = false;
                // $event.preventDefault();
                console.log('not valid');
                return;
            }
        };

    });
