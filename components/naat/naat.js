angular.module('app')
    .controller('naatCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.reciters = "";

      $http.get('https://bbmserver.herokuapp.com/allreciters')
                .success(function (data) {
                    $scope.reciters = data.reciters;
                })
                .error(function (data, status, headers, config) {

                });
        
    }]);

angular.module('app').directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
            });
        }
    };
});

angular.module('app')
    .directive("reciters", function () {
    return {
        templateUrl: 'directives/reciters.html',
        replace: 'true',
        scope: {
            reciterObject: '='
        }
    }
});
