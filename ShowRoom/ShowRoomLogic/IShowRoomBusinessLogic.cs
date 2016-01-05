using ShowRoomEntities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShowRoomLogic
{
    public interface IShowRoomBusinessLogic
    {
        List<Painting> GetAllPaintings();
        void AddPainting(Painting painting);
        void ThumbUp(Painting painting);
    }
}
