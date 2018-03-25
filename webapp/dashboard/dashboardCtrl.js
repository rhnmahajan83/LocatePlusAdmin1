/**
 * Created by Rohan on 3/22/2018.
 */
app.controller('dashboardCtrl', function ($scope, $state) {

    $scope.logout = function () {
        $state.go("home")
    }
})