angular.module("myNgRouter.controllers", ["myNgRouter.filters"])
   .controller("AppController", ["$scope", "$location", function ($scope, $location) {
       $scope.people = [
            { "Name":"Bob", "Age":23, "Gender":"Male", "Id":1 },
            { "Name":"Chuck", "Age":31, "Gender":"Male", "Id":2 },
            { "Name":"John", "Age":25, "Gender":"Male", "Id":3 },
            { "Name":"Kate", "Age":42, "Gender":"Female", "Id":4 },
            { "Name":"Abigail", "Age":32, "Gender":"Female", "Id":5 },
            { "Name":"Doris", "Age":26, "Gender":"Female", "Id":6 },
            { "Name":"Jean", "Age":37, "Gender":"Male", "Id":7 }
        ]; 
        
        $scope.move = function (path) {
            $location.path(path)
        };
   }])
   .controller("HomeController", ["$scope" , function($scope, findByIdFilter) {

   }])
   .controller("DetailController", ["$scope" , "findByIdFilter", "$routeParams", function($scope, findByIdFilter, $routeParams) {
       var results = findByIdFilter($scope.people, $routeParams.pid);
       if (results && results.length > 0)
            $scope.person = results[0];
   }]);