import SharedSwagger_RequestBody from "./requestBody";
import SwaggerShared_Responses from "./responses";
import SharedSwagger_Methods from "./methods";
import SwaggerShared_Parameters from "./parameters";

export default abstract class SwaggerShared {
    public static Responses = class extends SwaggerShared_Responses { }
    public static RequestBody = class extends SharedSwagger_RequestBody { }
    public static Methods = class extends SharedSwagger_Methods { }
    public static Parameters = class extends SwaggerShared_Parameters {}
}