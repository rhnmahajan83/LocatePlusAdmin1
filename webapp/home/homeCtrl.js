/**
 * Created by Rohan on 3/22/2018.
 */
app.controller('homeCtrl', function ($scope,$state) {

    $scope.login = function () {
        $state.go("dashboard")
    }
    /*$scope.login = function () {
        DialogService.login()
    }

    $scope.register = function () {
        DialogService.register("", "", "")
    }*/
})