import { Login_SwaggerExample, Login_SwaggerSchema } from "../../../../schemas_and_examples/login";
import { Token_SwaggerSchema } from "../../../../schemas_and_examples/token";
import jsonContentSwagger from "../../../../utils/jsonContent.swagger";
import swaggerResponse from "../../../../utils/responses/status-code/response.swagger";

export default {
    "post": {
        "summary": "Nutritionist login",
        "description": "This route tries to log in a nutritionist user",
        "tags": ["Auth", 'Nutritionist'],
        "security": [
            {
                "bearerAuth": []
            }
        ],
        "requestBody": {
            "content": {
                ...jsonContentSwagger(Login_SwaggerSchema, {
                    ...Login_SwaggerExample
                })
            }
        },
        "responses": {
            ...swaggerResponse(200, 'Valid login', jsonContentSwagger(Token_SwaggerSchema)),
            ...swaggerResponse(401, 'Invalid password'),
            ...swaggerResponse(404, 'Email not found'),
        }

    }
}