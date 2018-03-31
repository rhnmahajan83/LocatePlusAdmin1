/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('removePlaceCtrl', function ($scope, $mdDialog, $http, placeId, placeName, rating, review, description,
                                                placeAddress, noOfUsers, ToastService, $rootScope) {


    $scope.placeId = placeId
    $scope.placeName = placeName
    $scope.placeAddress = placeAddress
    $scope.rating = rating
    $scope.review = review
    $scope.noOfUsers = noOfUsers
    $scope.description = description

    console.error(rating)

    console.error()


    $scope.cancel = function () {
        $mdDialog.hide()
    }

    var sync = function() {
        $http({
            method: 'POST',
            url: 'http://' + Constants.IP + ':8080/api/user/getPhoto',
            data: {
                placeId: placeId
            }
        }).then(function (response) {
            if (response)
                $scope.photos = response.data.photos
                $scope.ic = response.data.photos.inAppropriateCount
            console.error("ic" +ic)
        })
    }

    $scope.remove = function () {
        $http({
            method: 'POST',
            url : 'http://' + Constants.IP + ':8080/api/admin/removePlace',
            data:{
                placeId:placeId
            }
        }).then(function (response) {
                if(response.data.success == true)
                $mdDialog.hide()
                ToastService.toast("Place removed successfully...")
            })
    }

        $scope.removePhoto = function (photo) {
            var photoUuid = photo.uuid

            console.error('uuid: ' + photoUuid)
            $http({
                method: 'POST',
                url: 'http://' + Constants.IP + ':8080/api/admin/removePhotos',
                data: {
                    photoUuid: photoUuid,
                    placeId: placeId
                }
            }).then(function (response) {
                if (response.data.success == true)
                ToastService.toast("Photo removed successfully...")
                    $rootScope.broadcast('sync')
            })
        }

    $scope.$on('sync', sync())

    $.fn.stars = function() {

        return $(this).each(function() {
            // Get the value
            var val = parseFloat($(this).html());

            // Make sure that the value is in 0 - 5 range, multiply to get width
            var size = Math.max(0, (Math.min(5, val))) * 16;

            // Create stars holder
            var $span = $('<span />').width(size);
            // Replace the numerical value with stars
            $(this).html($span);
        });
    }

    $(function() {
        $('span.stars').stars();
    });

})
