import SwaggerSchema_Aliment from "./extends/aliment";
import SwaggerSchema_Diet from "./extends/diet";
import SwaggerSchema_Error from "./extends/errors";
import SwaggerSchema_Food from "./extends/food";
import SwaggerSchema_Login from "./extends/login";
import SwaggerSchema_Meal from "./extends/meal";
import SwaggerSchema_Nutritionist from "./extends/nutritionist";
import SwaggerSchema_Patient from "./extends/patient";
import SwaggerSchema_Token from "./extends/token";

export default abstract class SwaggerSchema {
    public static Nutritionist = class extends SwaggerSchema_Nutritionist { }
    public static Patient = class extends SwaggerSchema_Patient { }

    public static Diet = class extends SwaggerSchema_Diet { }
    public static Meal = class extends SwaggerSchema_Meal { }
    public static Food = class extends SwaggerSchema_Food { }
    public static Aliment = class extends SwaggerSchema_Aliment { }

    public static Error = class extends SwaggerSchema_Error { }
    public static Token = class extends SwaggerSchema_Token { }
    public static Login = class extends SwaggerSchema_Login { }
}