/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('removePlaceCtrl', function ($scope, $mdDialog, $http, placeId, placeName, rating, placeAddress, ToastService) {

    $scope.placeId = placeId
    $scope.placeName = placeName
    $scope.placeAddress = placeAddress
    $scope.rating = rating

    $scope.cancel = function () {
        $mdDialog.hide()
    }

    $scope.remove = function () {
        $http({
            method: 'POST',
            url : 'http://localhost:8080/api/admin/removePlace',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            data:{
                placeId:placeId
            }
        }).then(
            function (response) {
                if(response.data.success == true)
                $mdDialog.hide()
                ToastService.toast("Place removed successfully...")
            }
        )
    }
})