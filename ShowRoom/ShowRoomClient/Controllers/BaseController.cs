using ShowRoomLogic;
using System.Web.Http;

namespace ShowRoomClient
{
    public class BaseController : ApiController
    {
        protected IShowRoomBusinessLogic _repository { get; set; }

        public BaseController(IShowRoomBusinessLogic repository)
        {
            _repository = repository;
        }
    }
}
