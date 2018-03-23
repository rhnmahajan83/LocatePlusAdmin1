/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('indexCtrl', function ($scope, $state) {

    $scope.go = function go() {
        $state.go(home)
    }
})