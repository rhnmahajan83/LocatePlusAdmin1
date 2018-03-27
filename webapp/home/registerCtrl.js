/**
 * Created by Rohan on 3/23/2018.
 */

app.controller('registerCtrl', function ($scope, $mdDialog, $state, $http, DialogService) {

    $scope.register = function () {
        var username = $scope.email
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/auth/registerAdmin',
            headers: {
                username: username
            }
        }).then(function (response) {
                $scope.password = response.data.password
                console.error(response.data.password)
                $mdDialog.hide()
            var req = {
                user: "locateplus0@gmail.com",    // Replace with your user
                pass: "locate!plus0", // Replace with your password
                source: "",        // Replace with your sender ID
                destination: "+917507356304", // Replace with the recipient number
                sms: "Your Loc plus Password is"+response.data.password,           // Replace with your message
            };

            $http.get("http://api.123-txt.com/Api123WCF.svc/rest/SendSms", {params: req});
        })
    }

    $scope.cancel = function () {
        $mdDialog.hide()
    }

    $scope.login = function () {
        DialogService.login()
    }
})