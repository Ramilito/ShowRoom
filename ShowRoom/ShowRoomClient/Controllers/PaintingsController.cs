using ShowRoomEntities;
using System.Collections.Generic;
using System.Web.Http;
using ShowRoomLogic;

namespace ShowRoomClient
{
    public class PaintingsController : BaseController
    {
        public PaintingsController(IShowRoomBusinessLogic repository) : base(repository) { }

        [HttpPost]
        public void ThumbUp([FromBody] Painting painting)
        {
            _repository.ThumbUp(painting);
        }

        [HttpGet]
        public List<Painting> Get()
        {
            var result = _repository.GetAllPaintings();

            return result;
        }

    }
}