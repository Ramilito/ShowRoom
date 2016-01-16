(function () {
    'use strict';

    angular.module('app').directive('babylonScene', babylonScene);

    function babylonScene() {
        var directive = {
            link: link,
            restrict: "AE",
        };
        return directive;

        function link(scope, element, attribute) {
            var canvas = document.getElementById("renderCanvas");
            var engine = new BABYLON.Engine(canvas, true);

            BABYLON.SceneLoader.Load("content/scenes/", "showRoom.babylon", engine, function (scene) {
                // Wait for textures and shaders to be ready
                scene.executeWhenReady(function () {

                    // Attach camera to canvas inputs
                    scene.activeCamera.attachControl(canvas);

                    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
                    scene.collisionsEnabled = true;

                    var camera = scene.cameras[0];
                    //var camera = new BABYLON.TouchCamera("TouchCamera", new BABYLON.Vector3(1, 1, 1), scene)
                    camera.applyGravity = true;
                    camera.checkCollisions = true;
                    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);


                    for (var i = 0; i < scene.meshes.length; i++) {
                        scene.meshes[i].checkCollisions = true;
                    }

                    engine.runRenderLoop(function () {
                        scene.render();
                     
                    });
                    engine.resize();
                    // Resize
                    window.addEventListener("resize", function () {
                        engine.resize();
                    });
                });
            }, function (progress) {
                // To do: give progress feedback to user
            });
         
        };
    };
})();