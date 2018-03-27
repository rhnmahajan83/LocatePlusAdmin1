/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('categoryCtrl', function ($http, $scope, DialogService) {

    var categoryData = []

    $http({
        method: 'GET',
        url : 'http://localhost:8080/api/admin/getCategories'
    }).then(
        function (response) {
            categoryData = response.data.markers
            $scope.categories = categoryData
            console.error(categoryData)
        }
    )

    $scope.add = function () {
        DialogService.category()
    }
})