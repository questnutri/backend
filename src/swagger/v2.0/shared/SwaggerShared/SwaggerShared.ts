import SharedSwagger_RequestBody from "./requestBody";
import SharedSwagger_Responses from "./responses";
import SharedSwagger_Methods from "./methods";

export default abstract class SwaggerShared {
    public static Responses = class extends SharedSwagger_Responses { }
    public static RequestBody = class extends SharedSwagger_RequestBody { }
    public static Methods = class extends SharedSwagger_Methods { }
}