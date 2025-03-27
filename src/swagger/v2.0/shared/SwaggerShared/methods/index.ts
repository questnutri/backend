import SharedSwagger_Methods_Diet from "./diet";
import SharedSwagger_Methods_Food from "./food";
import SharedSwagger_Methods_Meal from "./meal";
import SharedSwagger_Methods_Patient from "./patient";

export default abstract class SharedSwagger_Methods {
    public static Patient = class extends SharedSwagger_Methods_Patient { }
    public static Diet = class extends SharedSwagger_Methods_Diet { }
    public static Meal = class extends SharedSwagger_Methods_Meal { }
    public static Food = class extends SharedSwagger_Methods_Food { }
}