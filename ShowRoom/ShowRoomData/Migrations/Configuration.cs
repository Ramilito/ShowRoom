namespace ShowRoomData.Migrations
{
    using ShowRoomEntities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ShowRoomData.ShowRoomDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ShowRoomDbContext context)
        {
            context.Paintings.AddOrUpdate(
              p => p.id,
                new Painting { id = 1, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/1.png", thumbsUp = 220 },
                new Painting { id = 2, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/2.jpg", thumbsUp = 0 },
                new Painting { id = 3, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/3.jpg", thumbsUp = 0 },
                new Painting { id = 4, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/4.jpg", thumbsUp = 0 },
                new Painting { id = 5, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/5.jpg", thumbsUp = 0 },
                new Painting { id = 6, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/6.jpg", thumbsUp = 0 },
                new Painting { id = 7, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/7.jpg", thumbsUp = 0 },
                new Painting { id = 8, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/8.jpg", thumbsUp = 0 },
                new Painting { id = 9, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/9.jpg", thumbsUp = 0 },
                new Painting { id = 10, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/10.jpg", thumbsUp = 0 },
                new Painting { id = 11, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/11.jpg", thumbsUp = 0 },
                new Painting { id = 12, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/12.jpg", thumbsUp = 0 },
                new Painting { id = 13, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/13.jpg", thumbsUp = 0 },
                new Painting { id = 14, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/14.jpg", thumbsUp = 0 },
                new Painting { id = 15, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/15.jpg", thumbsUp = 0 },
                new Painting { id = 16, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/16.jpg", thumbsUp = 0 },
                new Painting { id = 17, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/17.jpg", thumbsUp = 0 },
                new Painting { id = 18, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/18.jpg", thumbsUp = 0 },
                new Painting { id = 19, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/19.jpg", thumbsUp = 0 },
                new Painting { id = 20, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/20.jpg", thumbsUp = 0 },
                new Painting { id = 21, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/21.jpg", thumbsUp = 0 },
                new Painting { id = 22, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/22.jpg", thumbsUp = 0 },
                new Painting { id = 23, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/23.jpg", thumbsUp = 0 },
                new Painting { id = 24, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/24.jpg", thumbsUp = 0 },
                new Painting { id = 25, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/25.jpg", thumbsUp = 0 },
                new Painting { id = 26, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/26.jpg", thumbsUp = 0 },
                new Painting { id = 27, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/27.jpg", thumbsUp = 0 },
                new Painting { id = 28, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/28.jpg", thumbsUp = 0 },
                new Painting { id = 29, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/29.jpg", thumbsUp = 0 },
                new Painting { id = 30, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/30.jpg", thumbsUp = 0 },
                new Painting { id = 31, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/31.jpg", thumbsUp = 0 },
                new Painting { id = 32, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/32.jpg", thumbsUp = 0 },
                new Painting { id = 33, name = "Dancing Couple", text = "Dancing Couple", src = "content/img/paintings/33.png", thumbsUp = 0 },
                new Painting { id = 34, name = "Dogs at the window", text = "Dogs at the window", src = "content/img/paintings/34.jpg", thumbsUp = 0 },
                new Painting { id = 35, name = "Flowers", text = "Flowers", src = "content/img/paintings/35.jpg", thumbsUp = 0 },
                new Painting { id = 36, name = "Flowers", text = "Flowers", src = "content/img/paintings/36.jpg", thumbsUp = 0 },
                new Painting { id = 37, name = "Flowers", text = "Flowers", src = "content/img/paintings/37.jpg", thumbsUp = 0 },
                new Painting { id = 38, name = "Flowers", text = "Flowers", src = "content/img/paintings/38.jpg", thumbsUp = 0 },
                new Painting { id = 39, name = "Flowers", text = "Flowers", src = "content/img/paintings/39.jpg", thumbsUp = 0 });
        }
    }
}
