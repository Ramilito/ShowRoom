using System.Web;
using System.Web.Optimization;

namespace ShowRoomClient
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/core").Include(
                        "~/Scripts/angular/angular.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular/angular-route.js",
                        "~/Scripts/angular/angular-animate.js",
                        "~/Scripts/angular/angular-aria.js",
                        "~/Scripts/angular/angular-cookies.js",
                        "~/Scripts/angular/angular-mocks.js",
                        "~/Scripts/babylon/babylon.js"));

            bundles.Add(new ScriptBundle("~/bundles/material").Include(
                        "~/Scripts/angular/angular-material.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/app/app.module.js",
                      "~/app/services/products.js",
                      "~/app/services/shoppingCart.js",
                      "~/app/directives/babylonScene.js",
                      "~/app/controllers/about.js",
                      "~/app/controllers/checkout.js",
                      "~/app/controllers/dialog.js",
                      "~/app/controllers/gallery.js",
                      "~/app/controllers/main.js",
                      "~/app/controllers/scene.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/css/angular-material.css",
                      "~/Content/css/overrides.css",
                      "~/Content/css/site.css"));
        }
    }
}
