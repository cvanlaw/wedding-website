using Microsoft.EntityFrameworkCore;
using wedding_api.Controllers;
using wedding_api.Models;

namespace wedding_api.Data
{
    public class RsvpContext : DbContext
    {
        protected RsvpContext()
        {
        }

        public RsvpContext(DbContextOptions<RsvpContext> options) : base(options)
        { }

        public DbSet<Rsvp> Rsvps { get; set; }

        public DbSet<Guest> Guests { get; set; }
    }
}