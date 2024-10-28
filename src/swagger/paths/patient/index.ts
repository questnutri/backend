import { Patient_UpdateSwagger } from '../../schemas_and_examples/patient'
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
		"responses": {
			...loggedSessionRequiredSwaggerResponse,
		}
	}
}

export default {
	'': patientRoot,
}
