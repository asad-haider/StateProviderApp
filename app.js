/**
 * Created by Asad on 4/28/2016.
 */

var app = angular.module('app', ['ui.router', 'ngResource', 'ngAnimate', 'ui.bootstrap'])
    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider',
        function ($urlRouterProvider, $stateProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'components/home/home.html',
                    controller: 'homeCtrl'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'components/about/about.html',
                    controller: 'aboutCtrl'
                })

                .state('contact', {
                    url: '/contact',
                    templateUrl: 'components/contact/contact.html'
                })
                .state('naat', {
                    url: '/naat',
                    templateUrl: 'components/naat/naat.html',
                    controller: 'naatCtrl'
                })
                .state('album', {
                    url: '/album/:reciterID/:albumID',
                    templateUrl: 'components/naat/album.html',
                    controller: 'albumCtrl'
                })
    }])
    .factory('myservice', ['$http', function ($http) {
    return {
        getTemperature: function (cityName) {
            var link = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=9911df3f0e7a2b578c245dfdea7e4edc&units=metric'
            $http.get(link)
                .then(function(repsonse) {
                    return repsonse.data[0];
                })
        }
    }
}]);

