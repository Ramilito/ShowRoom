(function () {
    'use strict';

    angular.module('app').service('shoppingService', shoppingService);

    function shoppingService($cookies, productsService) {
        var vm = this;
        var cart = [];
  
        vm.addOrRemove = function (id) {
            var indexOf = cart.indexOf(id);

            if (indexOf !== -1) {
                $cookies.remove("cart" + id);
                cart.splice(indexOf, 1);
            } else {
                $cookies.put("cart" + id, id);
                cart.push(id);
            }
        };

        vm.isInCart = function (id) {
            var itemCookie = $cookies.getObject("cart" + id);
            var indexOf = cart.indexOf(id);

            if (indexOf !== -1) {
                return true;
            } else if (itemCookie !== undefined) {
                vm.addOrRemove(id);
                return true;
            }
            return false;

        };

        vm.getItems = function () {
            return cart;
        };

        return vm;
    };
})();