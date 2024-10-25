import loggedSessionRequiredSwaggerResponse from "../../utils/common/loggedSessionRequired.swagger-response"

export const patientRoot = {
    "get": {
        "summary": "Patient info",
        "description": "This route retrieves basic information related to a patient",
        "tags": ['Patient'],
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
    '': patientRoot,
}