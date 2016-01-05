(function () {
    'use strict';

    angular.module('app').controller('Checkout', checkout);

    function checkout(productsService, shoppingService, $timeout) {
        var vm = this;
        vm.title = "Your order details";
        vm.isHidden = true;

        $timeout(function () {
            vm.isHidden = false;
        }, 100);

        vm.items = [];
        vm.addItem = function (painting) {
            vm.items.push({
                id: painting.id,
                src: painting.src,
                name: painting.name,
                text: painting.text,
            });
        };

        vm.itemsInCart = shoppingService.getItems();
        angular.forEach(vm.itemsInCart, function (id) {
            var painting = productsService.getItemById(id);
            vm.addItem(painting);
        });
    };
})();