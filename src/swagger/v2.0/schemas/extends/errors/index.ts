import SwaggerSchema_Error_Login from "./login";
import SwaggerSchema_Error_Registration from "./registration";

export default class SwaggerSchema_Error {
    public static schema = {
        type: 'object',
        properties: {
            error: {
                type: 'string',
            },
            status: {
                type: 'number',
            },
        },
    }
    
    public static Registration = class extends SwaggerSchema_Error_Registration {}
    public static Login = class extends SwaggerSchema_Error_Login {}

}