angular.module('app')
    .controller('naatCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.reciters = "";

      $http.get('https://bbmserver.herokuapp.com/allreciters')
                .success(function (data) {
                    $scope.reciters = data.reciters;

                    angular.forEach($scope.reciters, function(value, key){
                        $http.get('https://bbmserver.herokuapp.com/'+ value._id +'/allalbums')
                            .success(function (data) {
                                value.albums = data.albums;
                                
                            })
                            .error(function (data, status, headers, config) {

                            });
                    });
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
    .directive("albums", function () {
        return {
            templateUrl: 'directives/albums.html',
            replace: 'true',
            scope: {
                albumObject: '='
            }
        }
    });
