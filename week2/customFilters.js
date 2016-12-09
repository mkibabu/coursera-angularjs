(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', msgController)
  // 2. register the custom filter via the filter function, giving it the name
  // of the filter and the name of the filter factory function that creates our
  // filter.
  .filter('loves', LovesFilter);
  // 3. inject it into the controller, with the name that you used to register it
  // + the word 'Filter' attached to it.
  msgController.$inject = ['$scope', 'lovesFilter'];
  function msgController($scope, lovesFilter) {
    $scope.name = "Name";
    // 4. Use your custom filter
    $scope.sayLovesInsteadOfLikes = function() {
      var msg = 'Michael likes to eat healthy snacks!'
      return lovesFilter(msg);
    };
    $scope.sayMessage = function() {
      var msg = 'Michael likes to eat healthy snacks!'
      return msg;
    };
  }

  // 1. create the filter factory functon
  function LovesFilter() {
    return function(input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }

})()
