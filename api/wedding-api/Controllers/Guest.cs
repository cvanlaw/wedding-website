using wedding_api.Controllers;

namespace wedding_api.Models
{
    public class Guest
    {
        public int GuestId { get; set; }

        public string GuestName { get; set; }

        public MealSelection MealSelection { get; set; }

        public int RsvpId { get; set; }

        public Rsvp Rsvp { get; set; }
    }
}