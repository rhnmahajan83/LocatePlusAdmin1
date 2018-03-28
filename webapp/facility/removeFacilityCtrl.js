/**
 * Created by Rohan on 3/27/2018.
 */

app.controller('removeFacilityCtrl', function ($scope, $http, $mdDialog, ToastService, facility) {

    $scope.facility = facility

    $scope.remove = function () {
        $http({
            method: 'POST',
            url : 'http://172.16.39.50:8080/api/admin/removeCategory',
            data: {
                facility: facility
            }
        }).then(function (response) {
            if (response.data.success == true)
                $mdDialog.hide()
            $rootScope.$broadcast('sync')
            ToastService.toast("Facility removed successfully...")
        })
    }
})