var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.productsList = [];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.productsList.indexOf($scope.addMe) == -1) {
            $scope.productsList.unshift($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.productsList.splice(x, 1);
    }
});