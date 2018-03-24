/**
 * Created by Rohan on 3/23/2018.
 */

app.service('DialogService', function($mdDialog) {

    // Launch Login Dialog
    this.login = function () {
        // Show Dialog
        $mdDialog.show({    templateUrl: 'home/login.html',
            controller: 'loginCtrl',
            clickOutsideToClose: true
        })
    }

    // Launch Register Dialog
    this.register = function (name, email, password,role,companyName) {
        // Show Dialog
        $mdDialog.show({    templateUrl: 'home/register.html',
            controller: 'registerCtrl',
            clickOutsideToClose: true,
            locals: {
                name: name,
                email: email,
                password: password,
                role:role,
                companyName:companyName
            }
        })
    }

    // Launch Remove Place Dialog
    this.place = function (placeId, placeName, ic) {
        // Show Dialog
        $mdDialog.show({    templateUrl: 'place/removePlace.html',
            controller: 'removePlaceCtrl',
            clickOutsideToClose: true,
            locals: {
                placeId : placeId,
                placeName : placeName,
                ic : ic
            }
        })
    }
})