/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('facilityCtrl', function ($http, $scope, DialogService) {

    var facilityData = []

    $http({
        method: 'GET',
        url : 'http://' + Constants.IP + ':8080/api/user/getFC'
    }).then(
        function (response) {
            facilityData = response.data.facilities
            $scope.facilities = facilityData
            console.error(facilityData)
        }
    )

    $scope.$on('sync', function () {
        $http({
        method: 'GET',
        url : 'http://' + Constants.IP + ':8080/api/user/getFC'
    }).then(
        function (response) {
            facilityData = response.data.facilities
            $scope.facilities = facilityData
            console.error(facilityData)
        }
    )
    })
    $scope.add = function () {
        DialogService.facility()
    }
})