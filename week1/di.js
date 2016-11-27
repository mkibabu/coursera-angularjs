(function () {
  'use strict';

  angular.module('DIApp', [])
  // minified JS retains string literals, but minifies function and variable
  // names. As such, $scope, $filter and $injector are minified, which makes
  // angular not work (it won't know that whatever single-xcter name $scope is
  // given, for instance, is a placeholder for (and actually means) $scope).
  // String literals aren't minified, however. So we can change the controller
  // call below to take an array of string literals (the arguments needed - in
  // correct order) and the controller function.

  // original, that would be ruined by minification
  // .controller('DIController', diController);
  // new
  // .controller('DIController', ['$scope', '$filter', diController])
  // Even better, and more readable; directly inject the controller's angular
  // arguments, i.e:
  .controller('DIController', diController);
  diController.$inject = ['$scope', '$filter']

  function diController($scope, $filter, $injector) {
    $scope.name = 'Michael';
    // filter service is used to create functions used to format data
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name)
    };

  }

})()
