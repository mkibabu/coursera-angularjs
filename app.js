// ng exposes only the 'angular' object globally
(function () {
  'use strict';
  // define the module, with the name of the application and an array of dependencies.
  angular.module('myFirstApp', [])
  // define the viewmodel (controller) of the view (the html), and the function
  // that describes how it works. Function takes $scope, which is an ng construct
  // that allows us to share data between viewmodel and view
  .controller('MyFirstController', function($scope) {
    // $scope can have properties on it that are exposed to the view
    $scope.name = 'Michael';
    $scope.sayHello = function() {
      return 'Hello Coursera!'
    }
  })

})();
