angular.module("myApp.directives", [])
    .directive("positiveOrNegative", [function () {
        return {
            template:"<span></span>",
            restrict:"E",
            scope: {
                number:"="
            },
            link: function (scope, element, attrs) {
                scope.$watch("number", function(newValue, oldValue) {
                    element.find("span").html((newValue >= 0) ? "Positive" : "Negative");
                });
            }
        };  
    }]);
    