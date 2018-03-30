/**
 * Created by Rohan on 3/22/2018.
 */
app.controller('homeCtrl', function ($scope, $state, DialogService) {

    $scope.login = function () {
        $state.go('dashboard')
    }

    $scope.register = function () {
        DialogService.register("", "", "")
    }
})