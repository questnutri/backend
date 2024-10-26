import { Patient_UpdateSwagger } from '../../schemas_and_examples/patient'
import loggedSessionRequiredSwaggerResponse from '../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../utils/jsonContent.swagger'
import swaggerResponse from '../../utils/responses/status-code/response.swagger'

export const patientRoot = {
	get: {
		summary: 'Patient info',
		description: 'This route retrieves basic information related to a patient',
		tags: ['Patient'],
		security: [
			{
				bearerAuth: [],
			},
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
		},
	},
	patch: {
		summary: 'Update patient',
		description: 'This route updates patient data',
		tags: ['Patient'],
		security: [
			{
				bearerAuth: [],
			},
		],
		'requestBody':{
			'content': {
				...jsonContentSwagger(Patient_UpdateSwagger)
			}
		},
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200,'Ok', jsonContentSwagger(Patient_UpdateSwagger))
		},
	},
}

export default {
	'': patientRoot,
}
