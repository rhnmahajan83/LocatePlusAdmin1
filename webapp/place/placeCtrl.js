/**
 * Created by Rohan on 3/22/2018.
 */
app.controller('placeCtrl', function ($scope, $mdDialog, $state, DialogService) {

    $scope.places = [
            {placeId: 1, placeName: "Apollo Hospital", ic: 65},
            {placeId: 2, placeName: "Chinchwad Station", ic: 8},
            {placeId: 3, placeName: "Sparsh Hospital", ic: 13},
            {placeId: 4, placeName: "Morya Hospital", ic: 57}
        ]

    $scope.remove = function (place) {
        var placeId = place.placeId
        var placeName = place.placeName
        var ic = place.ic

        DialogService.place(placeId, placeName, ic)
    }
})