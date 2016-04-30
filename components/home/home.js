angular.module('app')
    .controller('homeCtrl', ['$scope', 'myservice', '$http', function ($scope, myservice, $http) {

        $scope.title = "Home";
        $scope.cityName = ""
        
        $scope.getTemperature = function () {
            $http.get('http://api.openweathermap.org/data/2.5/weather?q='+ $scope.cityName +'&appid=9911df3f0e7a2b578c245dfdea7e4edc&units=metric')
                .success(function (data) {
                    $scope.temperatureResult = data;
                })
                .error(function (data, status, headers, config) {
                    //  Do some error handling here
                });
        }


}]);

angular.module('app').directive("searchResult", function () {
        return {
            templateUrl: 'directives/searchResult.html',
            replace: 'true',
            scope: {
                cityName: '@',
                lat: '@',
                lng: '@',
                currentTemp: '@',
                minTemp: '@',
                maxTemp: '@',
                humidity: '@',
                pressure: '@'
            }

        }
});


