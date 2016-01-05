(function () {
    'use strict';

    angular.module('app').controller('Gallery', gallery);

    function gallery($timeout, $mdDialog, $mdMenu, $location, $cookies, shoppingService, productsService) {
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
                thumbUp: $cookies.getObject("thumbUp" + painting.id),
                thumbsUp: painting.thumbsUp,
                plusOne: painting.plusOne,
                fbLink: 'https://www.facebook.com/sharer/sharer.php?u=' + 'http://37.123.166.129/showroom/' + painting.src,

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

        vm.thumbUp = function (item) {
            productsService.thumbUp(item);
        };

        vm.showDialog = function (ev, item) {
            $mdDialog.show({
                controller: 'Dialog as vm',
                templateUrl: 'app/views/pictureDialog.tmpl.html',
                locals: { painting: item },
                //scope: vm,
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            })
        };
            
        vm.shareOnFacebook = function (id) {
                
        };

        vm.openMenu = function ($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };
    };
})();