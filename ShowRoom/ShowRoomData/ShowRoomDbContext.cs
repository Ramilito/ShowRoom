using ShowRoomEntities;
using System.Linq;
using System.Collections.Generic;
using System.Data.Entity;

namespace ShowRoomData
{
    public class ShowRoomDbContext : DbContext, IShowRoomDbContext
    {
        public DbSet<Painting> Paintings { get; set; }

        public ShowRoomDbContext() : base("ShowRoomContext")
        {
            
        }

        public IQueryable<Painting> GetAllPaintings()
        {
            var result = Paintings;
            return result;
        }

        public void AddPainting(Painting painting)
        {
            Paintings.Add(painting);
            Save();
        }

        public void ThumbUp(Painting painting)
        {
            var result = Paintings.Where(x => x.id == painting.id).First();
            result.thumbsUp = painting.thumbsUp;
            Save();
        }

        private int Save() {
            return base.SaveChanges();
        }
    }
}
