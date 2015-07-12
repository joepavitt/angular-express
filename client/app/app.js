angular.module('App', [
    "App.directive"
])

// Controller
.controller("AppCtrl", ['$scope', 'myService',
    function($scope, myService /*Inject myService*/) {
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
])

.filter('bytesfilter', function() {
    var units = ['bytes', 'kB', 'MB'];

    return function filesize(bytes) {
        var exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
        var number = (bytes / Math.pow(1024, Math.floor(exponent))).toFixed(0);
        return number + ' ' + units[exponent];
    };
})

.directive('myDirective', function() {
    return {
        restrict: 'E', //This means that it will be used as an element, i.e. <header></header>
        replace: true,
        // Relative from index.html
        templateUrl: "app/directive.html",
        controller: "DirectiveCtrl"
    };
});
