angular.module("statesApp.controllers", ["statesApp.factories"])
   .controller("AppController", ["$scope", "$location", function ($scope, $location) {
       $scope.go = function (path) {
           $location.path(path);
       };
   }])
   .controller("ListController", ["$scope" , "stateFactory", function($scope, stateFactory) {
       $scope.states = stateFactory.query();
       $scope.states.$promise.catch(function (params) {
          console.error("An error occurred querying server"); 
       });
       
       $scope.selectState = function (state) {
           $scope.go("/details/" + state._id);
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", "stateFactory", function($scope, $routeParams, stateFactory) {
       $scope.isUpdating = false;
       if ($routeParams.id) {
            $scope.state = stateFactory.get({id: $routeParams.id}, function (res) {
                $scope.isUpdating = true;
            });
            $scope.state.$promise.catch(function (params) {
                console.error("An error occurred fetching state"); 
            });
       }
       else {
           $scope.state = new stateFactory();
       }
       
       $scope.delete = function () {
         $scope.state.$delete(function (params) {
             $scope.go("/");
         }).catch(function (params) {
            console.error("An error occurred deleting a state"); 
        });
       };
      
       $scope.save = function () {
           if ($routeParams.id) {
               $scope.state.$update(function (params) {
                   $scope.go("/");
               }).catch(function (params) {
                  console.error("An error occured updating state data"); 
               });
           }
           else {
               $scope.state._id = $scope.state.abbreviation;
               $scope.state.$save(function (params) {
                   $scope.go("/");
               }).catch(function (params) {
                  console.error("An error occured saving state data"); 
               });
           }
       };
   }]);