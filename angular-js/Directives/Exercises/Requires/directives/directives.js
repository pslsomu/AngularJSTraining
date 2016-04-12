/*
    Modify your pane directive to work in conjunction with a container
*/

angular.module("myApp.directives", [])
    .directive("pane", [function () {
        return {
            templateUrl:"directives/partials/pane-template.html",
            restrict:"E",
            transclude:true,
            scope: {
                header:"="
            },
            link: function (scope, element, attrs) {
            }
        };
    }]);
