(function () {
    'use strict';

    angular.module('app').service('productsService', productsService);

    function productsService($timeout, $http, $cookies) {
        var vm = this;
        vm.paintings = [];

        vm.addItem = function (item) {
            vm.paintings.push(item);
        };


        vm.paintings.push({ id: 1, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/1.jpg", thumbsUp: 220 });
        vm.paintings.push({ id: 2, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/2.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 3, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/3.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 4, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/4.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 5, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/5.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 6, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/6.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 7, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/7.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 8, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/8.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 9, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/9.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 10, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/10.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 11, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/11.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 12, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/12.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 13, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/13.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 14, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/14.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 15, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/15.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 16, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/16.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 17, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/17.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 18, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/18.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 19, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/19.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 20, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/20.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 21, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/21.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 22, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/22.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 23, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/23.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 24, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/24.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 25, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/25.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 26, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/26.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 27, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/27.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 28, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/28.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 29, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/29.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 30, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/30.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 31, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/31.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 32, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/32.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 33, name: "Dancing Couple", text: "Dancing Couple", src: "content/img/paintings/33.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 34, name: "Dogs at the window", text: "Dogs at the window", src: "content/img/paintings/34.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 35, name: "Flowers", text: "Flowers", src: "content/img/paintings/35.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 36, name: "Flowers", text: "Flowers", src: "content/img/paintings/36.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 37, name: "Flowers", text: "Flowers", src: "content/img/paintings/37.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 38, name: "Flowers", text: "Flowers", src: "content/img/paintings/38.jpg", thumbsUp: 0 });
        vm.paintings.push({ id: 39, name: "Flowers", text: "Flowers", src: "content/img/paintings/39.jpg", thumbsUp: 0 });



        vm.getItems = function () {
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

        return vm;
    };
})();