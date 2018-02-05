using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using wedding_api.Data;
using wedding_api.Models;

namespace wedding_api.Controllers
{
    [Route("api/[controller]")]
    public class RsvpController : Controller
    {
        private readonly RsvpContext _context;

        public RsvpController(RsvpContext context)
        {
            this._context = context;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Rsvp rsvp)
        {
            if (rsvp?.Guests == null ||
                rsvp.Guests.Any(x =>
                    x.MealSelection == MealSelection.Undefined || string.IsNullOrWhiteSpace(x.GuestName)))
            {
                return this.BadRequest();
            }

            await this._context.Rsvps.AddAsync(rsvp);
            await this._context.SaveChangesAsync();

            return this.Ok();
        }
    }
}