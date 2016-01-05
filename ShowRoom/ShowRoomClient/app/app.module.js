(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngCookies']).config(function ($routeProvider, $mdThemingProvider, $locationProvider) {
        $routeProvider
           .when('/Gallery', {
               templateUrl: '/app/views/Gallery.html',
           })
            .when('/Checkout', {
                templateUrl: '/app/views/Checkout.html',
            })
           .when('/About', {
               templateUrl: '/app/views/About.html',
           })
            .when('/Scene', {
                templateUrl: '/app/views/Scene.html',
            })
           .otherwise({
               redirectTo: '/Gallery'
           });
  
        $mdThemingProvider.theme('default').primaryPalette('cyan').accentPalette('purple');
        $locationProvider.html5Mode(true);
    }).constant("serverUrl", {
        "url": "http://localhost",
        "port": "62417"
    });
})();