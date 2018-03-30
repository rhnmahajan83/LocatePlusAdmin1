/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('categoryCtrl', function ($http, $scope, DialogService) {

    var categoryData = []

    $scope.$on('sync', function () {
        $http({
            method: 'GET',
            url : 'http://' + Constants.IP + ':8080/api/user/getFC'
        }).then(
            function (response) {
                categoryData = response.data.categories
                $scope.categories = categoryData
                console.error(categoryData)
            }
        )
    })
    $http({
        method: 'GET',
        url : 'http://' + Constants.IP + ':8080/api/user/getFC'
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