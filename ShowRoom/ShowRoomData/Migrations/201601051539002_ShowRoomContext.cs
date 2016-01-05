namespace ShowRoomData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ShowRoomContext : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Paintings",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        name = c.String(),
                        text = c.String(),
                        thumbsUp = c.Int(nullable: false),
                        src = c.String(),
                        thumbUp = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Paintings");
        }
    }
}
