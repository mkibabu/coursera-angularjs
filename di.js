(function () {
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', diController);

  function diController($scope, $filter, $injector) {
    $scope.name = 'Michael';
    // filter service is used to create functions used to format data
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name)
    };

    console.log($injector.annotate(diController));

  }

})()
