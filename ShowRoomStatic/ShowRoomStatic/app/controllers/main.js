(function () {
    'use strict';

    angular.module('app').controller('Main', main);

    function main($mdSidenav, $mdMedia, $timeout, $location, $routeParams, $scope, $log, shoppingService, productsService) {
        var vm = this;

        vm.logo = "content/img/icons/logo.svg";

        vm.cartItems = shoppingService.getItems();
        vm.paintings = productsService.getItems();

        vm.tallToolbar = $mdMedia('gt-md');
        vm.showTour = $mdMedia('gt-sm');

        $scope.$watch(function () { return $mdMedia('gt-md'); }, function (tall) {
            vm.tallToolbar = tall;
        });

        $scope.$watch(function () { return $mdMedia('gt-sm'); }, function (show) {
            vm.showTour = show;
        });

        vm.toggleLeft = function () {
            $mdSidenav('left')
               .toggle()
               .then(function () {
                   $log.debug("toggle " + "left" + " is done");
               });
        };

        vm.nav = function (page) {
            $location.path('/' + page);
        };

        vm.close = function () {
            $mdSidenav('left').close().then(function () {
                $log.debug("close LEFT is done");
            });
        };

        vm.open = function () {
            $mdSidenav('left').open().then(function () {
                $log.debug("open LEFT is done");
            });
        };

        vm.fabActions = [
        { name: "Twitter", icon: "content/img/icons/twitter.svg", direction: "bottom" },
        { name: "Facebook", icon: "content/img/icons/facebook.svg", direction: "bottom" },
        ];

        vm.fabMode = "md-fling";
        vm.fabHover = true;
        vm.slides = [];

        angular.forEach(vm.slides, function (slide) {
            $scope.$watch(slide.fabOpen, function (slide) {
                if (slide.fabOpen) {
                    $timeout(function () {
                        slide.fabTlpOpen = slide.fabOpen;
                    }, 600);
                } else {
                    slide.fabTlpOpen = slide.fabOpen;
                }
            });
        });

    };
})();