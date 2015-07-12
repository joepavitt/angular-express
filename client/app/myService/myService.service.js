'use strict';

angular.module('App')
    .factory('myService', ['$http', '$q',
        function($http, $q) {

            var apiRoute = '/api';

            var myService = {

                /* Check on the status of the trained NLC instance */
                get : function() {
                    return $q(function(resolve, reject) {
                        $http({
                            method: 'GET',
                            url: apiRoute + '/sample/1'
                        }).then(function(response){
                            // Declare that the request has successfully completed
                            // If there is a .then() function following the call of
                            // this function, <response.data> will be the input to that
                            resolve(response.data);
                        }, function (error) {
                            // Declare that the request has failed
                            // If there is a .then() function following the call of
                            // this function, <error> will be the input to that in order to do error handling
                            reject(error);
                        });
                    });
                },

                /* Send a piece of text to NLC and return a classification */
                postDevice: function(deviceObj) {
                    return $q(function(resolve, reject) {
                        $http({
                            method: 'POST',
                            url: apiRoute + '/sample/1',
                            data: deviceObj
                        }).then(function(response){
                            // Declare that the request has successfully completed
                            // If there is a .then() function following the call of
                            // this function, <response.data> will be the input to that
                            resolve(response.data);
                        }, function (error) {
                            // Declare that the request has failed
                            // If there is a .then() function following the call of
                            // this function, <error> will be the input to that in order to do error handling
                            reject(error);
                        });
                    });
                }
            };

            // Public API here
            return myService;
        }
    ]);
