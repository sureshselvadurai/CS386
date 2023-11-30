let app = angular.module("mainApp",[])
app.controller("CalculatorCtrl",fcalculator);

function fcalculator ($scope){
    $scope.result = 0;
    $scope.add = function(){
        $scope.result = $scope.num1 + $scope.num2 ;
    }
}