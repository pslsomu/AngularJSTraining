angular.module("myApp.directives", [])
    .directive("firstOne", [function () {
        return {
            template:"This is the first One hee",
        };  
    }])
    .directive("secondOne", [function () {
        return {
            template:"This is the Second One",
            restrict:"A"
        };  
    }])
    .directive("thridOne", [function () {
        return {
            template:"This is the Third One",
            restrict:"C"
        };  
    }])
    .directive("fourthOne", [function () {
        return {
            template:"This is the Fourth One",
            restrict:"AEC"
        };  
    }])
    .directive("fifthOne", [function () {
        return {
            templateUrl:"directives/partials/number-five-template.html",
            restrict:"E"
        };  
    }]);
    