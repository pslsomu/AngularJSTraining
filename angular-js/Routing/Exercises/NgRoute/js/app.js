/*
Setup the appropriate application routing

/ should go to the HomeController
/team/ should go to the DetailController and accept an ID parameter

*/

angular.module("myNgRouter", ["ngRoute", "myNgRouter.controllers"]);