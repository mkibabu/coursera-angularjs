(function() {
  'use strict';

  var shoppingList = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
    "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
  ];

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', shoppingListController);
  shoppingListController.$inject = ['$scope'];
  function shoppingListController($scope) {
    $scope.shoppingList = shoppingList;
  }

})();
