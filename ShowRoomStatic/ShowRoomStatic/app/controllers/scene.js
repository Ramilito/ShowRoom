(function () {
    'use strict';

    angular.module('app').controller('Scene', scene);

    function scene($timeout) {
        var vm = this;

        vm.title = "Scene";
        vm.isHidden = true;
        $timeout(function () {
            vm.isHidden = false;
        }, 100);

        
    };
})();