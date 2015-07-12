/* by calling ('App') and not ('App', [...]) we can append new features
to an existing module (in this case a directive). Writing a secondary
argument of an array is the sign to say you want to create a new module.*/

angular.module('App')

.directive('myDirective', function() {
    return {
        restrict: 'E', //This means that it will be used as an element, i.e. <header></header>
        replace: true,
        // Relative from index.html
        templateUrl: "app/myDirective/myDirective.html",
        controller: "DirectiveCtrl"
    };
});
