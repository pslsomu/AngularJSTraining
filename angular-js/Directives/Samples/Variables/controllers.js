angular.module("myApp", ["myApp.directives"])
    .controller("HomeController", function ($scope) {
        $scope.message = "Hello World";
        
        $scope.updatedEvalution = function(val) {
            console.log("Expression Did Change", val);   
        }
        
        $scope.valueDidChange = function(val) {
            console.log("Expression was evaluated", val);
        }
    });