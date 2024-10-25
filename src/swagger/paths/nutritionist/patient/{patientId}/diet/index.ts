import loggedSessionRequiredSwaggerResponse from "../../../../../utils/common/loggedSessionRequired.swagger-response"

export const root = {
    "get": {
        "summary": "Diets of a Patient",
        "description": "This route gets all the diets related to a especific patient",
        "tags": ['Nutritionist'],
        "security": [
            {
                "bearerAuth": []
            }
        ],
        "responses": {
            ...loggedSessionRequiredSwaggerResponse,
        }

    }
}

export default {
    '': root,
    
}