using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace wedding_api.Controllers
{
    [Route("api/[controller]")]
    public class RsvpController : Controller
    {
        // POST api/values
        [HttpPost]
        public void Post([FromBody]RsvpModel rsvpModel)
        {
        }
    }

    public class RsvpModel
    {
        public List<GuestModel> Guests { get; set; }
    }

    public class GuestModel
    {
        public string GuestName { get; set; }

        public MealSelection MealSelection { get; set; }
    }

    public enum MealSelection
    {
        Undefined = 0,
        Beef,
        Fish,
        Chicken,
        Veggie,
        Kids
    }
}
