using System.Collections.Generic;

namespace wedding_api.Models
{
    public class Rsvp
    {
        public int RsvpId { get; set; }

        public List<Guest> Guests { get; set; }
    }
}