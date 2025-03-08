import SwaggerSchema_Meal_Create from "./create"
import SwaggerSchema_Meal_Update from "./update"

export default abstract class SwaggerSchema_Meal {
    public static schema = {

    }

    public static Create = class extends SwaggerSchema_Meal_Create {}
    public static Update = class extends SwaggerSchema_Meal_Update {}
}