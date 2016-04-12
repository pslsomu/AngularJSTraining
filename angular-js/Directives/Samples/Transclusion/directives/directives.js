angular.module("myApp.directives", [])
    .directive("pane", [function () {
        return {
            templateUrl:"directives/partials/pane-template.html",
            restrict:"E",
            transclude:true,
            scope: {
                header:"="
            }
        };
    }]);
