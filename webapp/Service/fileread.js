/**
 * Created by Rohan on 3/31/2018.
 */

app.directive("fileread", function () {
    return {
        scope: {
            fileread: "&"
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                console.error("sdvjsdjkl")
                scope.$apply(function () {
                    scope.fileread({file: changeEvent.target.files[0]})
                });
            });
        }
    }
})