/**
 * Created by Rohan on 3/26/2018.
 */
app.controller('addFacilityCtrl', function ($scope, $http, $mdDialog, ToastService, $rootScope) {

    $scope.add = function () {
        console.error($scope.name)
        $http({
            method: 'POST',
            url : 'http://172.16.39.50:8080/api/admin/addFacility',
            data: {
                facility : $scope.name
            }
        }).then(function (response) {
                if (response.data.success == true)
                    $mdDialog.hide()
            $rootScope.$broadcast('sync')
            ToastService.toast("Facility added successfully...")
            })
        }
})