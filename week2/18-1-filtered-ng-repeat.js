var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function greaterThan5(value) {
  return value > 5;
}

function greaterThan(lowestLimit) {
  return function(currentValue) {
    return currentValue > lowestLimit;
  };
}
// if passing an already-declared funciton to a filter, recall that we pass the
// function, we don't execute it (i.e. we don't add () at the end of the function
// argument). The filter function will execute it for us.
// var filteredNumberArray = numberArray.filter(greaterThan5);
// Again, don't execute the funciton, just pass it in. The callback should be a
// function that filter can execute hence we can pass greaterThan(3) which will
// return a function (see the declaration above), and that function is what filter
// will call.

var filteredNumberArray = numberArray.filter(greaterThan(3));
console.log('Filtered number array:', filteredNumberArray);

// shopping list that contains string values
var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
  "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log('Shopping list:', shoppingList);

function arrayContains(searchValue) {
  return function(currentValue) {
    return currentValue.indexOf(searchValue) !== -1;
  };
}
var peptoList = shoppingList.filter(arrayContains('Bismol'));
console.log('Pepto list', peptoList);
