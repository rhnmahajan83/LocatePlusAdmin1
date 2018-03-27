/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('facilityCtrl', function ($http, $scope, DialogService) {

    var facilityData = []

    $http({
        method: 'GET',
        url : 'http://localhost:8080/api/admin/getFacilities'
    }).then(
        function (response) {
            facilityData = response.data.markers
            $scope.facilities = facilityData
            console.error(facilityData)
        }
    )

    $scope.add = function () {
        DialogService.facility()
    }
})