(function () {
    'use strict';

    angular.module('app').controller('Dialog', dialog);

    function dialog($scope, $mdDialog, $cookies, painting, shoppingService, productsService) {
        var vm = this;
        vm.painting = painting;

        vm.addOrRemove = function (item) {
            item.itemAdded = !item.itemAdded;
            shoppingService.addOrRemove(item.id);
        };
    };
})();