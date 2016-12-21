(function () {
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', counterController);

  // First call uses native Js' timeout, second one uses Ng's timeout
  // counterController.$inject = ['$scope'];
  counterController.$inject = ['$scope', '$timeout'];
  function counterController($scope, $timeout) {
    $scope.incrementingCounter = 0;

    // First way to invoke digest loop with non-Ng code: use the $digest function.

    // $scope.incrementCounter = function() {
    //   setTimeout(function() {
    //     // This timeout gets added to the event queue completely separately from
    //     // the call to increment the counter, and is not called inside the angular
    //     // context at all (i.e. it has no '$scope.somethimgTimeoutSomething' call,
    //     // like the incrementCounter call.)
    //     $scope.incrementingCounter++;
    //     console.log('Counter incremented');
    //     // To manually kick off the digest loop, well, ask it nicely! Once the $digest
    //     // call is encountered, Angular kicks off the digest loop and the watcher for the
    //     // checks if anything has changed, and updates the browser.
    //     $scope.$digest();
    //   }, 2000);

    // A better way that $digest is $apply. This is because if any error occurs in
    // the section right before $digest, the exceptions are thrown as part of that code
    // being executed, and will not be shown to Angular, since that code is still not
    // part of Angular's scope (i.e. Angular has no idea what code was run right before
    // the $digest call, so any errors thrown by that code aren't visible to it, and
    // might get hidden). The $apply function invokes the digest loop to check for changes
    // to the ng-context.
    // $scope.incrementCounter = function() {
    //   setTimeout(function() {
    //     // make the non-Angular code visible to the Angular scope
    //     $scope.$apply(function() {
    //       $scope.incrementingCounter++;
    //       console.log('Counter incremented');
    //     });
    //   }, 2000);

    // NOTE: Ng has an in-built timeout function. To see it in action, switch the
    // commenting on the $inject calls way up there, uncomment the incrementCounter call
    // below and comment out the one above.
    $scope.incrementCounter = function() {
      $timeout(function() {
        $scope.incrementingCounter++;
        console.log('Counter incremented');
      }, 2000);
    }

  }

})();
