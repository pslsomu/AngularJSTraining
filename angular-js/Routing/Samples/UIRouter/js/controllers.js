angular.module("myUIRouter.controllers", ["myUIRouter.filters"])
   .controller("AppController", ["$scope", function ($scope) {
       $scope.people = [
            { "Name":"Bob", "Age":23, "Gender":"Male", "Id":1 },
            { "Name":"Chuck", "Age":31, "Gender":"Male", "Id":2 },
            { "Name":"John", "Age":25, "Gender":"Male", "Id":3 },
            { "Name":"Kate", "Age":42, "Gender":"Female", "Id":4 },
            { "Name":"Abigail", "Age":32, "Gender":"Female", "Id":5 },
            { "Name":"Doris", "Age":26, "Gender":"Female", "Id":6 },
            { "Name":"Jean", "Age":37, "Gender":"Male", "Id":7 }
        ]; 
        
        $scope.availableForSort = ["Name", "Age", "Gender"];
        $scope.sortOn = $scope.availableForSort[0];
        $scope.sortDirection = false;
   }])
   .controller("DetailController", ["$scope" , "findByIdFilter", "$stateParams", function($scope, findByIdFilter, $stateParams) {
       var results = findByIdFilter($scope.people, $stateParams.id);
       if (results && results.length > 0)
            $scope.person = results[0];
   }]);