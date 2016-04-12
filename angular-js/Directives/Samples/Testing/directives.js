angular.module("myApp.directives", [])
    .directive("echo", [function () {
        return {
            template:"echo \"{{say}}\"",
            restrict:"E",
            scope: {
                say:"="
            }
        };  
    }]);
    