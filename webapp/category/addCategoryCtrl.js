/**
 * Created by Rohan on 3/26/2018.
 */
app.controller('addCategoryCtrl', function ($scope, $http, $mdDialog, ToastService, $rootScope) {

    $scope.add = function () {
        $http({
            method: 'POST',
            url : 'http://' + Constants.IP + ':8080/api/admin/addCategory',
            data: {
                category: $scope.name
            }
        }).then(function (response) {
                if (response.data.success == true)
                    $mdDialog.hide()
            $rootScope.$broadcast('sync')
            ToastService.toast("Category added successfully...")
            })
        }
})