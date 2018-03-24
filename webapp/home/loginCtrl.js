/**
 * Created by Rohan on 3/23/2018.
 */

app.controller('loginCtrl', function ($scope, $mdDialog, $state, DialogService) {

    $scope.cancel = function () {
        $mdDialog.hide()
    }

    $scope.register = function () {
        DialogService.register()
    }

    $scope.login = function () {
        $state.go("dashboard")
        $mdDialog.hide()
    }
})