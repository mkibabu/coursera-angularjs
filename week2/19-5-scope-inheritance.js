(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ParentController1', ParentController1)
.controller('ChildController1', ChildController1)
.controller('ParentController2', ParentController2)
.controller('ChildController2', ChildController2);

// NOTE: The reason the function has an uppercase letter is that Ng uses it as a
// constructor function. The .controller('ControllerName', ControllerFunction) call
// uses the Controller function as a fnction constructor and calls it with 'new',
// leading to a new instance of that controller being created.
ParentController1.$inject = ['$scope'];
function ParentController1($scope) {
  $scope.parentValue = 1;
  // here, make $scope.pc point to the actual ParentController instance; possible
  // because this parentController function will be invoked by Ng as a function controller,
  // i.e. with 'new', to create a new instance of the controller.
  $scope.pc = this;
  $scope.pc.parentValue = 1;
}

// Uncomment this controller's constructor function for part 4
ChildController1.$inject = ['$scope'];
function ChildController1($scope) {
  // // since this will be nested in the HTML, it will inherit prototypally from
  // // the ParentController1, and $scope.parentValue will be the parentValue in the
  // // ParentController1.
  // console.log("$scope.parentValue: ", $scope.parentValue);
  // console.log("CHILD $scope: ", $scope);
  //
  // // create some primitive value on the child scope. This should mask the parent's
  // // value.
  // $scope.parentValue = 5;
  // console.log("*** CHANGED: $scope.parentValue = 5 ***");
  // console.log("$scope.parentValue: ", $scope.parentValue);
  // console.log($scope);
  //
  // // note that $scope.parent points to the parent *prototype*, the general pattern
  // // of the parent of this $scope, while $scope.pc points to the *instance* of the
  // // prototype that is itself the parent of this child (since it was created using
  // // the ParentController function with the 'new' keyword). In other words, $scope.parent
  // // is the class that we're based on, while $scope.pc is the actual instance of the
  // // parent class that we have.
  // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
  // $scope.pc.parentValue = 5;
  // console.log("** CHANGED: $scope.pc.parentValue = 5; ***");
  // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
  // console.log("$scope: ", $scope);
  //
  // console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
}

// Uncomment this section for part 5
// ** Controller As syntax
function ParentController2() {
  var parent = this;
  parent.value = 1;
}
ChildController2.$inject = ['$scope'];
function ChildController2($scope) {
  var child = this;
  // while this property has the same name as the parent value, since we're assigning
  // it to this instance of the controller specifically, it will not mask the parent's
  // property.
  child.value = 5;
  console.log("ChildController2 $scope: ", $scope);
}

})();
