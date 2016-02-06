(function () {
    'use strict';

    angular.module('app').controller('Vernissage', vernissage);

    function vernissage(productsService, $timeout) {
        var vm = this;
        vm.title = "Vernissage";
        vm.isHidden = true;
        $timeout(function () {
            vm.isHidden = false;
        }, 100);

        vm.items = productsService.getVernissage();

    };
})();