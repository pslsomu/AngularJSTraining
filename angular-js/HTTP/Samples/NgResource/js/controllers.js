angular.module("statesApp.controllers", ["ngResource"])
   .controller("AppController", ["$scope", "$location", "$resource", function ($scope, $location, $resource) {
       $scope.go = function (path) {
           $location.path(path);
       };
          
       $scope.resourceFactory = $resource("http://localhost:9081/States/:id", { id: '@_id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
                }
       });
   }])
   .controller("ListController", ["$scope" , "$http", function($scope, $http) {
       $scope.states = $scope.resourceFactory.query();
       $scope.states.$promise.catch(function (params) {
          console.error("An error occurred querying server"); 
       });
       
       $scope.selectState = function (state) {
           $scope.go("/details/" + state._id);
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", "$http", function($scope, $routeParams, $http) {
       
       
       $scope.isUpdating = false;
       if ($routeParams.id) {
            $scope.state = $scope.resourceFactory.get({id: $routeParams.id}, function (res) {
                $scope.isUpdating = true;
            });
            $scope.state.$promise.catch(function (params) {
                console.error("An error occurred fetching state"); 
            });
       }
       else {
           $scope.state = new $scope.resourceFactory();
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