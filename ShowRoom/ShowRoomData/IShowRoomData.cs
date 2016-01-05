using ShowRoomEntities;
using System.Linq;

namespace ShowRoomData
{
    public interface IShowRoomDbContext
    {
        IQueryable<Painting> GetAllPaintings();
        void AddPainting(Painting painting);
        void ThumbUp(Painting painting);
    }
}
