(function () {
'use strict';

// shopping list that contains string values
var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
  "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

// shopping list that contains object values, with a name and property
var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', shoppingListController);

shoppingListController.$inject = ['$scope'];
function shoppingListController($scope) {
  // add those external shoppingList objects as properties on the scope
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;
  $scope.addToList = function() {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };
    $scope.shoppingList2.push(newItem);
  }
}

})();
