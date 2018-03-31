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
    this.place = function (placeId, placeName, rating, placeAddress, description, noOfUsers, review) {
        // Show Dialog
        $mdDialog.show({    templateUrl: 'place/removePlace.html',
            controller: 'removePlaceCtrl',
            clickOutsideToClose: true,
            locals: {
                placeId : placeId,
                placeName : placeName,
                rating : rating,
                placeAddress: placeAddress,
                description : description,
                noOfUsers: noOfUsers,
                review : review,
            }
        })
    }

    // Launch Remove Place Dialog
    this.category = function () {
        $mdDialog.show({
            templateUrl: 'category/addCategory.html',
            controller: 'addCategoryCtrl',
            clickOutsideToClose: true
        })
    }

    // Launch Remove Place Dialog
    this.facility = function () {
        $mdDialog.show({
            templateUrl: 'facility/addFacility.html',
            controller: 'addFacilityCtrl',
            clickOutsideToClose: true
        })
    }

    // Launch Remove Complaint Dialog
    /*this.complaint = function (placeId, placeName, rating, placeAddress, description, noOfUsers, review) {
        // Show Dialog
        $mdDialog.show({    templateUrl: 'place/removePlace.html',
            controller: 'removePlaceCtrl',
            clickOutsideToClose: true,
            locals: {
                complaint : placeId,
                placeName : placeName,
                resolutionCount : rating,
                placeAddress: placeAddress,
                description : description,
                noOfUsers: noOfUsers,
                review : review,
            }
        })
    }*/
})