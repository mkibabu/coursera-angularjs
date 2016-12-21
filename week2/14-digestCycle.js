(function () {
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', counterController);

  counterController.$inject = ['$scope'];
  function counterController($scope) {
    // we use ng-model to bind this variable and set up a watch
    $scope.name = 'Michael';

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
    // it's watching from the Angular context.
    // NOTE: This is not the recommended way to set up watches! DO NOT USE $WATCH IN
    // YOUR CONTROLLER!!
    // $scope.$watch('onceCounter', function(newValue, oldValue){
    //   console.log('old onceCounter value: ', oldValue);
    //   console.log('new onceCounter value: ', newValue)
    // });
    //
    // $scope.$watch('incrementingCounter', function(newValue, oldValue){
    //   console.log('old incrementingCounter value: ', oldValue);
    //   console.log('new incrementingCounter value: ', newValue)
    // });

    // use this to peek into the digest loop's execution. The digest function will
    // go through all the watchers and execute the functions therein.
    $scope.$watch(function() {
        // Each time a varaible changes, this should get logged twice (the digest
        // cycle involves two loops, usually). If nothing changes, it'll only run nce.
        console.log('Digest loop fired!');
    });
  }

})();
