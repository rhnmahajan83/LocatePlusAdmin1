/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('removePlaceCtrl', function ($scope, $mdDialog, placeId, placeName, ic) {

    $scope.placeName = placeName
    $scope.ic = ic

    $scope.cancel = function () {
        $mdDialog.hide()
    }
})