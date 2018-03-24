/**
 * Created by Rohan on 3/22/2018.
 */
app.controller('homeCtrl', function ($scope, $state, DialogService) {

    $scope.login = function () {
        DialogService.login()
    }

    $scope.register = function () {
        DialogService.register("", "", "")
    }
})