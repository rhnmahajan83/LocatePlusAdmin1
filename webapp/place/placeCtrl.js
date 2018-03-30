/**
 * Created by Rohan on 3/22/2018.
 */
app.controller('placeCtrl', function ($scope, $mdDialog, $state, DialogService, $http, $localStorage) {

    var placeData = []

    $http({
        method: 'GET',
        url : 'http://' + Constants.IP + ':8080/api/user/getPlaces'
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
        var rating = place.rating
        var placeAddress = place.address
        var review = place.review

        DialogService.place(placeId, placeName, rating, placeAddress, review)
    }
})