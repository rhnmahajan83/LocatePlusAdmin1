/**
 * Created by Rohan on 3/27/2018.
 */

app.controller('removeCategoryCtrl', function ($scope, $http, $mdDialog, ToastService, category) {

    $scope.category = category

    $scope.remove = function () {
        $http({
            method: 'POST',
            url : 'http://localhost:8080/api/admin/removeCategory',
            data: {
                category: category
            }
        }).then(function (response) {
            if (response.data.success == true)
                $mdDialog.hide()
            ToastService.toast("Category removed successfully...")
        })
    }
})