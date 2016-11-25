(function () {
  'use strict';

  angular.module('NameCalculator', [])
  .controller('NameCalculatorController', function($scope) {
    $scope.nameInput = "";
    $scope.nameNumericValue = 0;

    $scope.displayNumeric = function () {
      $scope.nameNumericValue = calculateNumericForString($scope.nameInput);
    }

    function calculateNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }
  })

})();
