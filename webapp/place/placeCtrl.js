/**
 * Created by Rohan on 3/22/2018.
 */
app.controller('placeCtrl', function ($scope, $mdDialog, $state, DialogService, $http) {

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

    $http({
        method: 'POST',
        url : 'http://' + Constants.IP + ':8080/api/user/getReviews',
        data: {}
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
        var rating = place.stars
        var placeAddress = place.address
        var description = place.description
        var noOfUsers = place.noOfUsers

        $http({
            method: 'POST',
            url : 'http://' + Constants.IP + ':8080/api/user/getReviews',
            data: {
                placeId: placeId
            }
        }).then(
            function (response) {
                $scope.review = response.data.reviews
            }
        )
              var review = $scope.review

        DialogService.place(placeId, placeName, rating, placeAddress, description, noOfUsers, review)
    }
})