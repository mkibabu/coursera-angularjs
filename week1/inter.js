(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', msgController);

  msgController.$inject = ['$scope'];
  function msgController($scope) {
    $scope.name = 'Michael';
    $scope.burrito = 'cat';
    $scope.getBurrito = function() {
      if($scope.burrito === 'cat') {
        $scope.burrito = 'dog';
      }
      else {
        $scope.burrito = 'cat';
      }
    }
    $scope.sayMessage = function() {
      return 'Michael likes to eat healthy snacks!'
    };
  }
})()
