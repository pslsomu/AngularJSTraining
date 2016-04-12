angular.module("myValues", [])
    .value("myValue", "Hello")
    .constant("myConstant", "World")
    .config(["myConstant", function (myConstant) {
        console.log("Value of myConstant:" + myConstant);
        // console.log("Value of myValue:" + myValue); Not available in the config phase
    }])
    .controller("FirstController", ["$scope", "myValue", "myConstant", function ($scope, myValue, myConstant) {
        
        $scope.value = myValue;
        $scope.constant = myConstant;
        
    }])
    .controller("SecondController", ["$scope", "myValue", "myConstant", function ($scope, myValue, myConstant) {
        myValue = "New Value";
        myConstant  = "Dude";
        
        $scope.value = myValue;
        $scope.constant = myConstant;
    }]);