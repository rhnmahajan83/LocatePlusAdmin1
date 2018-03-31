/**
 * Created by Rohan on 3/30/2018.
 */

app.controller('udidCtrl', function ($scope, $http, ImportService, ToastService) {

    $scope.import = function (file) {
        console.error("calling")
        ImportService.import('http://' + Constants.IP + ':8080/api/admin/importUdid', file)
            .then(function () {

                ToastService.toast('Excel file uploaded')
            },
            function (message) {

                ToastService.toast("Upload Error : " + message)
        })
    }
})