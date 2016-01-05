using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShowRoomClient.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            return View("~/Views/Index.cshtml");
        }
    }
}
