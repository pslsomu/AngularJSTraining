angular.module("statesApp.controllers", ["statesApp.services"])
   .controller("AppController", ["$scope", "$location", function ($scope, $location) {
       $scope.go = function (path) {
           $location.path(path);
       };
   }])
   .controller("ListController", ["$scope" , "stateService", function($scope, stateService) {
       $scope.states = stateService.all();
       $scope.states.$promise.catch(function (params) {
          console.error("An error occurred querying server"); 
       });
       
       $scope.selectState = function (state) {
           $scope.go("/details/" + state._id);
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", "stateService", function($scope, $routeParams, stateService) {
       $scope.isUpdating = false;
       if ($routeParams.id) {
            $scope.state = stateService.getById($routeParams.id);
            $scope.state.$promise.then(function(res) {
                if (res) $scope.isUpdating = true;
            }).catch(function (params) {
                console.error("An error occurred fetching state"); 
            });
       }
       else {
           $scope.state = stateService.build();
       }
       
       $scope.save = function () {
           if ($scope.EditStates.$invalid)
                return;
           $scope.state._id = $scope.state.abbreviation;
           $scope.state = stateService.save($scope.state);
           $scope.state.$promise.then(function (result) {
                $scope.go("/");
                }).catch(function (params) {
                    console.error("An error occurred deleting a state"); 
                });
       };
      
       $scope.delete = function () {
           stateService.delete($scope.state).then(function (res) {
               $scope.go("/");
           }).catch(function (params) {
                console.error("An error occurred deleting a state"); 
            });
       };
   }]);