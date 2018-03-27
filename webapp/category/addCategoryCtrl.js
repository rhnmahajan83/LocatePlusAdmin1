/**
 * Created by Rohan on 3/26/2018.
 */
app.controller('addCategoryCtrl', function ($scope, $http, $mdDialog, ToastService) {

    $scope.add = function () {
        $http({
            method: 'POST',
            url : 'http://localhost:8080/api/admin/addCategory',
            data: {
                category: $scope.name
            }
        }).then(function (response) {
                if (response.data.success == true)
                    $mdDialog.hide()
            ToastService.toast("Category added successfully...")
            })
        }
})