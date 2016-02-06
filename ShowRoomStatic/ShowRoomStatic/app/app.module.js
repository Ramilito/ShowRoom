(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ezfb', 'ngCookies']).config(function ($routeProvider, $mdThemingProvider, $locationProvider) {
        $routeProvider
           .when('/Gallery/:id?', {
               templateUrl: '/Gallery.html',
           })
            .when('/Checkout', {
                templateUrl: '/Checkout.html',
            })
            .when('/Vernissage', {
                templateUrl: '/Vernissage.html',
           })
           .when('/About', {
               templateUrl: '/About.html',
           })
            .when('/Scene', {
                templateUrl: '/Scene.html',
            })
           .otherwise({
               redirectTo: '/Gallery'
           });
  
        $mdThemingProvider.theme('default').primaryPalette('cyan').accentPalette('purple');
        $locationProvider.html5Mode(true);

    }).run(function (ezfb, $rootScope) {
        $rootScope.title = 'Galinas Gallery';

        ezfb.init({
            appId: '1107644002588201',
            xfbml: true,
            version: 'v2.5'
        });
    });
})();