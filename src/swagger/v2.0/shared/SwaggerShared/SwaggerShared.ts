import SharedSwagger_RequestBody from "./requestBody";
import SharedSwagger_Responses from "./responses";

export default abstract class SwaggerShared {
    public static Responses = class extends SharedSwagger_Responses {}
    public static RequestBody = class extends SharedSwagger_RequestBody {}
}