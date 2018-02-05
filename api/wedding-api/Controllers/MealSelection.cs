using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace wedding_api.Models
{
    [JsonConverter(typeof(StringEnumConverter))]
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