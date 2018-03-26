/**
 * Created by Rohan on 3/23/2018.
 */

app.controller('loginCtrl', function ($scope, $mdDialog, $state, DialogService, $localStorage, $window) {

    $localStorage.email = $scope.email


    $scope.submit = function () {
        $http({
            method: 'POST',
            url: '',
            headers: {
                email: $scope.email
            }
        }).then(
            function (response) {
                var password = response.data.password
            }
        )
    }



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