import loggedSessionRequiredSwaggerResponse from "../../../utils/common/loggedSessionRequired.swagger-response"
import rebasePathSwagger from "../../../utils/rebasePath.swagger"
import { injectParameter } from "../../../utils/swapDetails.swagger"
import PatientId from "./{patientId}"

const root = {
    "get": {
        "summary": "Nutritionist's Patients",
        "description": "This route retrieves all the patients related to a nutritionist",
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

injectParameter([
    {
        "name": "patientId",
        "in": "header",
        "description": "Patient ID to control state",
        "required": true
    }
], PatientId)

export default {
    '': root,
    ...rebasePathSwagger('{patientId}', PatientId)
    
}