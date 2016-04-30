angular.module('app')
    .controller('albumCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

        console.log($stateParams.reciterID);

        $http.get('https://bbmserver.herokuapp.com/'+ $stateParams.reciterID +'/allalbums')
            .success(function (data) {
                $scope.albums = data.albums;
            })
            .error(function (data, status, headers, config) {

            })

        console.log($scope.albums);

    }]);


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
