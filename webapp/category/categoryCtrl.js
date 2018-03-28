/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('categoryCtrl', function ($http, $scope, DialogService) {

    var categoryData = []

    $http({
        method: 'GET',
        url : 'http://172.16.39.50:8080/api/user/getFC'
    }).then(
        function (response) {
            categoryData = response.data.categories
            $scope.categories = categoryData
            console.error(categoryData)
        }
    )

    $scope.add = function () {
        DialogService.category()
    }
})