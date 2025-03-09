import SwaggerContent from "../../../class/SwaggerContent";
import SwaggerUtil from "../../../class/SwaggerUtil";
import SwaggerSchema from "../../../schemas/SwaggerSchema";


export default class SharedSwagger_RequestBody {
    public static login = SwaggerContent.builder().setSchemaAndExample(SwaggerSchema.Login)
}