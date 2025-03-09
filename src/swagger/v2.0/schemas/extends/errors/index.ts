import SwaggerSchema_Error_Login from "./login";
import SwaggerSchema_Error_Registration from "./registration";
import SwaggerSchema_Error_Server from "./server";

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

    public static Registration = class extends SwaggerSchema_Error_Registration { }
    public static Login = class extends SwaggerSchema_Error_Login { }
    public static Server = class extends SwaggerSchema_Error_Server { }
}