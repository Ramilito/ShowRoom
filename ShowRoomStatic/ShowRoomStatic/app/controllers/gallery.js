(function () {
    'use strict';

    angular.module('app').controller('Gallery', gallery);

    function gallery($timeout, $mdDialog, $mdBottomSheet, $mdMenu, $location, $routeParams, $cookies, $rootScope, shoppingService, productsService, ezfb) {
        var vm = this;
        vm.isHidden = true;
        $timeout(function () {
            vm.isHidden = false;
        }, 100);

        vm.paintings = [];
        vm.cart = shoppingService.getItems();

        vm.addItem = function (painting) {
            vm.paintings.push({
                id: painting.id,
                name: painting.name,
                text: painting.text,
                itemAdded: shoppingService.isInCart(painting.id),
                src: painting.src,
                plusOne: painting.plusOne,
                loadingMenu: false,
                menuOpen: false,
                href: 'http://galinapassare.website/Gallery/' + painting.id,
                fbLink: 'http://galinapassare.website/' + painting.src,

            });
        };

        angular.forEach(productsService.getItems(), function (painting) {
            vm.addItem(painting);
        });

        vm.rows = [
            { start: 0, end: 10 },
            { start: 10, end: 20 },
            { start: 20, end: 28 },
            { start: 29, end: 39 }
        ];

        vm.addOrRemove = function (item) {
            item.itemAdded = !item.itemAdded;
            shoppingService.addOrRemove(item.id);
        };

        vm.showDialog = function (ev, item) {
            $mdDialog.show({
                controller: 'Dialog as vm',
                templateUrl: '/pictureDialog.tmpl.html',
                locals: { painting: item },
                parent: angular.element(document.body),
                clickOutsideToClose:true
            })
        };
        var originatorEv;

        vm.openMenu = function ($mdOpenMenu, ev, painting) {
            originatorEv = ev;
            painting.menuOpen = true;
            painting.loadingMenu = true;
            $mdOpenMenu(originatorEv);

            ezfb.XFBML.parse(document.getElementById(painting.id), function (rest) {
                $timeout(function () {
                    painting.loadingMenu = false;
                }, 1200);
            });
        };

        vm.openBottomSheetSocial = function ($event, item) {
            $mdBottomSheet.show({
                templateUrl: '/bottomSheetSocial.tmpl.html',
                controller: 'BottomSheet as vm',
                clickOutsideToClose: true,
                locals: { painting: item },
                targetEvent: $event
            });
        };

        if ($routeParams.id !== undefined) {
            var id = parseInt($routeParams.id);
            var painting = vm.paintings[id - 1];

            $rootScope.ogTitle = painting.name;
            $rootScope.ogId = painting.id;

            $rootScope.ogContent = 'http://galinapassare.website/' + painting.src;

            vm.showDialog(originatorEv, painting);
        }

    };
})();