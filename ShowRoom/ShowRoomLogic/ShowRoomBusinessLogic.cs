using System.Collections.Generic;
using System.Linq;
using ShowRoomEntities;
using ShowRoomData;

namespace ShowRoomLogic
{
    public class ShowRoomBusinessLogic : IShowRoomBusinessLogic
    {
        private IShowRoomDbContext _ctx;

        public ShowRoomBusinessLogic(IShowRoomDbContext ctx)
        {
            _ctx = ctx;
        }

        public List<Painting> GetAllPaintings()
        {
            var result = _ctx.GetAllPaintings();

            return result.ToList();
        }

        public void AddPainting(Painting painting) {
            _ctx.AddPainting(painting);
        }

        public void ThumbUp(Painting painting)
        {
            _ctx.ThumbUp(painting);
        }
    }
}
