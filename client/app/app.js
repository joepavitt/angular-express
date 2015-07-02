angular.module('App', [
    "App.directive"
])

// Controller
.controller("AppCtrl", ['$scope',
    function($scope) {
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
