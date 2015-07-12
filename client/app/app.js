/* The array here should detail the App's dependencies, even if
there aren't any, this should remain an empty array, since this
is also the trigger to create a new module.*/

angular.module('App', [])

// Controller - this could/should be separated into it's own app.controller.js,
// but given that this is the only controller in this module, it has been left here for simplicity
.controller("AppCtrl", ['$scope', 'myService',
    function($scope, /*Inject myService*/ myService ) {
        $scope.showtab = 1;
        $scope.showcolor = 'red';
        $scope.bytes = 1234;
        $scope.arrayOfPeople = [{
            "name" : "Joe Pavitt",
            "number" : 123
        },{
            "name" : "John Bufe",
            "number" : 456
        },{
            "name" : "Andy Stoneberg",
            "number" : 789
        }];

        $scope.randomiseNumbers = function(){
            $scope.arrayOfPeople.forEach(function(d,i){
                $scope.arrayOfPeople[i].number = Math.random()*1000;
            });
        };

        /* Write functions using $scope that use myService - assigning them to
        scope makes them accessible from the HTML */

        // demonstrate a HTTP get request
        $scope.getStuff = function () {
            myService.get().then(/*define what to do next*/ function(data) {
                console.log('Successful Response of:');
                console.log(data);
            }, /*define what to do if there is an error*/ function (error) {
                console.log('Error in GET, with the following response:');
                console.log(error);
            });
        };

        $scope.postDevice = function (name) {
            // I am compiling the device object here, but you could equally
            // send just a device name and create the JSON in the service's function
            var dvcObject = {
                'device' : name
            };
            // call the local function 'postData'
            postData(dvcObject);
        };

        /* Demonstrate a 'bad request' - posting the wrong data such that the rest api returns a 400 error */
        $scope.postDeviceBadRequest = function (name) {
            // the object should use the 'device' key, so the 'device-name' key
            // should trigger a 'bad request' - this behaviour is defined by the REST API in sample.controller.js
            var dvcObject = {
                'device-name' : name
            };
            // call the local function 'postData'
            postData(dvcObject);
        };

        function postData(dvcObject) {
            myService.postDevice(dvcObject).then(/*define what to do next*/ function(data) {
                console.log('Successful Response of:');
                console.log(data);
            }, /*define what to do if there is an error*/ function (error) {
                console.log('Error in POST, with the following response:');
                console.log(error);
            });
        }
    }
]);
