(function () {
    'use strict';

    angular.module('app').controller('BottomSheet', bottomSheet);

    function bottomSheet($scope, $mdBottomSheet, painting) {
        var vm = this;
        vm.painting = painting;
    };
})();