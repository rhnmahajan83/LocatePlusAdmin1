/**
 * Created by Rohan on 3/23/2018.
 */

app.controller('registerCtrl', function ($scope, $mdDialog, $state, DialogService) {

    $scope.submit = function () {
        $http({
            method: 'POST',
            url: '',
            headers: {
                email: $scope.email
            }
        }).then(
            function (response) {
                $scope.password = response.data.password
            }
        )
    }

    var req = {
        user: "rhnmahajan83@gmail.com",    // Replace with your user
        pass: "user_password_goes_here", // Replace with your password
        source: "virtual_number",        // Replace with your sender ID
        destination: "", // Replace with the recipient number
        sms: "Test Message 1",           // Replace with your message
    };

    $http.get("http://api.123-txt.com/Api123WCF.svc/rest/SendSms", {params: req});

    $scope.cancel = function () {
        $mdDialog.hide()
    }

    $scope.login = function () {
        DialogService.login()
    }
})