var app = angular.module('twoApp', []);
app.controller('helloWorld', function($scope) {
  $scope.firstName = "Jane";
  $scope.lastName = "Smith";
  $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName;
  };
});