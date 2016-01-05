(function () {
    'use strict';

    angular.module('app').service('productsService', productsService);

    function productsService($timeout, $http, $cookies, serverUrl) {
        var vm = this;
        vm.paintings = [];

        vm.addItem = function (item) {
            vm.paintings.push(item);
        };

        vm.getItems = function () {
            if (vm.paintings.length === 0) {
                $http({
                    method: 'GET',
                    url: serverUrl.url + ":" + serverUrl.port + '/api/paintings/Get'
                }).then(function successCallback(response) {
                    angular.forEach(response.data, function (item) {
                        vm.addItem(item);
                        return vm.paintings;
                    });

                }, function errorCallback(response) {

                });
            }

            return vm.paintings;
        };

        vm.getItem = function (item) {
            var indexOf = vm.paintings.indexOf(item);
            return vm.paintings[indexOf];
        };

        vm.getItemById = function (id) {
            for (var i = 0; i < vm.paintings.length; i++) {
                if (id === vm.paintings[i].id) {
                    return vm.paintings[i];
                }
            }
            return -1;
        };

        vm.thumbUp = function (item) {
            var thumbCookie = $cookies.getObject("thumbUp" + item.id);

            if (thumbCookie && !item.thumbUp) {
                return;
            }

            item.thumbUp = !item.thumbUp;

            $cookies.put("thumbUp" + item.id, item.thumbUp);

            if (item.thumbUp) {
                item.thumbsUp += 1;
                item.plusOne = true;

                $timeout(function () {
                    item.plusOne = false;
                }, 200);

            } else {
                item.thumbsUp -= 1;
                item.minusOne = true;

                $timeout(function () {
                    item.minusOne = false;
                }, 200);
            }

            $http({
                method: 'POST',
                data: JSON.stringify(item),
                url: serverUrl.url + ":" + serverUrl.port + '/api/paintings/ThumbUp'
            });

            var indexOf = vm.paintings.indexOf(vm.getItemById(item.id));
            vm.paintings[indexOf] = item;
        };

        return vm;
    };
})();