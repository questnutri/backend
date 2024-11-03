import { Nutritionist_UpdatePatientSchema } from '../../schemas_and_examples/nutritionist'
import { Patient_InfoSchema, Patient_UpdateSwagger } from '../../schemas_and_examples/patient'
import loggedSessionRequiredSwaggerResponse from '../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../utils/jsonContent.swagger'
import swaggerResponse from '../../utils/responses/status-code/response.swagger'

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
			...swaggerResponse(200, 'Ok', jsonContentSwagger(Patient_InfoSchema))
		}

	},
	"patch": {
		"summary": "Update patient info",
		"description": "This route updates basic information related to a patient.",
		"tags": ['Patient'],
		"security": [
			{
				"bearerAuth": []
			}
		],
		'requestBody': {
			'content': {
				...jsonContentSwagger(Nutritionist_UpdatePatientSchema)
			}
		},
		"responses": {
			...loggedSessionRequiredSwaggerResponse,
		}
	}
}

export default {
	'': patientRoot,
}
