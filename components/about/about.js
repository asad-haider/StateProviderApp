angular.module('app')
    .controller('aboutCtrl', ['$scope', function ($scope) {
        $scope.title = "about";
        $scope.items = ['Things1', 'Things2', 'Things3'];
    }]);

