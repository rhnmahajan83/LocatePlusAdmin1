/**
 * Created by Rohan on 3/22/2018.
 */
app.controller('placeCtrl', function ($scope, $mdDialog, $state, DialogService, $http, $localStorage) {

    var placeData = []

    $http({
        method: 'GET',
        url : 'http://172.16.39.50:8080/api/user/getPlaces'
    }).then(
        function (response) {
            placeData = response.data.markers
            $scope.places = placeData
            console.error(placeData)
        }
    )
    $scope.remove = function (place) {
        var placeId = place.placeId
        var placeName = place.name
        var rating = place.star
        var placeAddress = place.address

        DialogService.place(placeId, placeName, rating, placeAddress)
    }
})