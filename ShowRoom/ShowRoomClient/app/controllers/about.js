(function () {
    'use strict';

    angular.module('app').controller('About', about);

    function about($timeout) {
        var vm = this;
        vm.isHidden = true;

        $timeout(function () {
            vm.isHidden = false;
        }, 100);

        vm.title = "About";
    };
})();