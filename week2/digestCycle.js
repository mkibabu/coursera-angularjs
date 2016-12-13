(function () {
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', counterController);

  counterController.$inject = ['$scope'];
  function counterController($scope) {
    // this value will only be incremented once. This is to test that its watcher
    // function is only invoked once.
    $scope.onceCounter = 0;
    // this one will be incremented multiple times. This is to test that its watcher
    // function gets invoked each time the value changes.
    $scope.incrementingCounter = 0;

    $scope.showNumberOfWatchers = function () {
      // variables internal to Angular are denoted with $$, and should not be
      // directly interacted with. Here, we make an exception for clarity's sake
      console.log('Number of watchers: ', $scope.$$watchersCount);
    };

    $scope.countOnce = function() {
      $scope.onceCounter = 1;
    };

    $scope.incrementIncrementingCounter  = function() {
      $scope.incrementingCounter++;
    }
    // one way to set up a watcher is by using the watch function. It takes two
    // arguments; the value to watch, and a function that responds to that value
    // changing. The responding function gets the old and new values of the variable
    // it's watching from the Angular context
    $scope.$watch('onceCounter', function(newValue, oldValue){
      console.log('old onceCounter value: ', oldValue);
      console.log('new onceCounter value: ', newValue)
    });

    $scope.$watch('incrementingCounter', function(newValue, oldValue){
      console.log('old incrementingCounter value: ', oldValue);
      console.log('new incrementingCounter value: ', newValue)
    });
  }

})();
