/**
 * Created by Rohan on 3/22/2018.
 */

app.controller('removePlaceCtrl', function ($scope, $mdDialog, $http, placeId, placeName, rating, placeAddress, ToastService) {

    $scope.placeId = placeId
    $scope.placeName = placeName
    $scope.placeAddress = placeAddress
    $scope.rating = rating

    $scope.cancel = function () {
        $mdDialog.hide()
    }

    $http({
        method: 'POST',
        url : 'http://' + Constants.IP + ':8080/api/user/getPhoto',
        data:{
            placeId:placeId
        }
    }).then(function (response) {
        if(response)
            $scope.photos = response.data.photos
    })

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
