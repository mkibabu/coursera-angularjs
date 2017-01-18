// two controllers, each one responsible for its own shopping list. Each list may
// a maximum number of items, which is customizable for each list/controller.

(function () {
'use strict';

// we don't register the service itself, just the factory, because
// we don't want Ng to create the service for us; we want to customize
// the service for each controller
angular.module('ControllerAsApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.factory('ShoppingListFactory', ShoppingListFactory);
// note that the service isn't registered here; that way, we don't get a singleton

// LIST #1 - controller
// inject the factory into the controller
ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list1 = this;

  // Use factory to create new shopping list service.
  // For this controller, don't define a maxItems value. Remember, 'ShoppingListFactory'
  // refers to the function that is being returned (i.e. the 'factory' function defined
  // within); adding () executes it (i.e. executes the 'factory' function), which returns
  // a new ShoppingListService
  var shoppingList = ShoppingListFactory();

  list1.items = shoppingList.getItems();

  list1.itemName = "";
  list1.itemQuantity = "";

  list1.addItem = function () {
    shoppingList.addItem(list1.itemName, list1.itemQuantity);
  }

  list1.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}


// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory) {
  var list2 = this;

  // Use factory to create new shopping list service.
  // Here, define a maxItems value
  var shoppingList = ShoppingListFactory(3);

  list2.items = shoppingList.getItems();

  list2.itemName = "";
  list2.itemQuantity = "";

  // change the addItem function to account for the maxItems limit, and
  // the error that may be thrown from adding to the list
  list2.addItem = function () {
    try {
      shoppingList.addItem(list2.itemName, list2.itemQuantity);
    } catch (error) {
      list2.errorMessage = error.message;
    }

  }

  list2.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}

// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      // Error is a built-in JS class
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  // we use the function approach here, rather than the object literal one (we
  // can use either)
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };
  return factory;
}

})();
