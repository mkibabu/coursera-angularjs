(function() {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListAddController', ShoppingListAddController)
  .controller('ShoppingListShowController', ShoppingListShowController)
  .service('ShoppingListService', ShoppingListService);
  // remember, services are singletons, so the instance we instantiate above will
  // be used by both controllers below.

  ShoppingListAddController.$inject = ['ShoppingListService'];
  function ShoppingListAddController(ShoppingListService) {
    var itemAdder = this;

    itemAdder.itemName = '';
    itemAdder.itemQuantity = '';

    itemAdder.addItem = function() {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    };
  }

  ShoppingListShowController.$inject = ['ShoppingListService'];
  function ShoppingListShowController(ShoppingListService) {
    var showList = this;
    showList.items = ShoppingListService.getItems();
    showList.removeItem = function(itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    }
  };
  // the service function is a function constructor, i.e. Capitalized, and Ng
  // calls it internally with 'new'
  function ShoppingListService() {
    // rename 'this' to something more readable and that will not have issues with
    // inner functions when we expose it to the outside world. This is used in function
    // constructors, not just any function.
    var service = this;

    // list of items; we don't expose this to the external components, but we
    // provide an api to it for the outside world to access.
    var items = [];

    // and now, the api
    service.addItem = function(itemName, itemQuantity) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      items.push(item);
    };

    service.removeItem = function(itemIndex) {
      items.splice(itemIndex, 1);
    }

    service.getItems = function() {
      return items;
    };
  }
})();
