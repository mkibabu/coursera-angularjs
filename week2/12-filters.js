(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', msgController);

  msgController.$inject = ['$scope', '$filter'];
  function msgController($scope, $filter) {
    $scope.name = 'Michael';
    $scope.cookieCost = .45;
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
      var msg = 'Michael likes to eat healthy snacks!'
      var output = $filter('uppercase')(msg);
      return output;
    };
  }
})()
