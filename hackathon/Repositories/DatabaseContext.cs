using hackathon.Models;
using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;

namespace hackathon.Repositories
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext()
        : base()
        { }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
        { }

        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }
    }
}
