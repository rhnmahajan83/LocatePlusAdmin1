/**
 * Created by Rohan on 3/23/2018.
 */

app.controller('registerCtrl', function ($scope, $mdDialog, $state, DialogService) {

    $scope.cancel = function () {
        $mdDialog.hide()
    }

    $scope.login = function () {
        DialogService.login()
    }
})