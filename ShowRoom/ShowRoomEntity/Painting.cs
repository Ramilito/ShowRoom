using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShowRoomEntities
{
    public class Painting
    {
        public int id { get; set; }
        public string name{ get; set; }
        public string text { get; set; }
        public int thumbsUp { get; set; }
        public string src { get; set; }

        public bool thumbUp{ get; set; }


    }
}
