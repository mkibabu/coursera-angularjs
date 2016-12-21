(function() {
  'use strict';

  angular.module('BindingApp', [])
  .controller('BindingController', bindingController);

  bindingController.$inject = ['$scope'];

  function bindingController($scope) {
    $scope.firstName = 'Michael';
    // this variable is one-time bound via ::interpolation. If initialized, its
    // watcher is created at initialization, then removed, so that clicking the
    // 'Set Full Name' button on the view does not change the value of this variable.
    // To test, toggle between these two declarations, then see how many watchers
    // are present and what the values of the variables are.

    // With this declaration + initialization, there'll always be just one watcher
    // (for 'firstName'). The watcher for fullName is removed once the value is initialized
    // to an empty string, as below.
    // $scope.fullName = '';

    // With this initialization, there'll be two watchers once the page loads; one for
    // the firstName (via ng-model) and another for fullName, via ::interpolation. once
    // fullName is initialized by clicking the 'Set full name' button, the fullName watcher
    // is removed.
    $scope.fullName;
    // With one-time binding, the variable is never updated again on the view, since
    // the watcher is removed after initialization. So even if we change the firstName,
    // subsequent calls to setFullName below will update the fullName property (click
    // 'Log full name') to confirm, but the value in the view bound via ::interpolation
    // will never be updated after the initialization update.
    $scope.setFullName = function() {
      $scope.fullName = $scope.firstName + ' Muraya';
    };

    // these are merely for testing purposes
    $scope.showNumberOfWatchers = function() {
      console.log('Number of watcher: ', $scope.$$watchersCount);
    };
    $scope.logFirstName = function() {
      console.log('First name is', $scope.firstName);
    };
    $scope.logFullName = function() {
      console.log('Full name is', $scope.fullName);
    };
  }
})();
