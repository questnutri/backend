import SwaggerUtil from "../../../class/SwaggerUtil";
import SwaggerSchema from "../../../schemas/SwaggerSchema";


export default class SharedSwagger_RequestBody {
    public static login = SwaggerUtil.Response.application_json(
        SwaggerSchema.Login.schema,
        SwaggerSchema.Login.example
    )
}