/*

Create a directive named pane that shows a pane of information and accepts a header parameter

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
