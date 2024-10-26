import { Patient_NewSwagger, Patient_UpdateSwagger } from '../../../schemas_and_examples/patient'
import loggedSessionRequiredSwaggerResponse from '../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../utils/responses/status-code/response.swagger'
import { injectParameter } from '../../../utils/swapDetails.swagger'
import PatientId from './{patientId}'

const root = {
	get: {
		summary: "Nutritionist's Patients",
		description:
      'This route retrieves all the patients related to a nutritionist',
		tags: ['Nutritionist'],
		security: [
			{
				bearerAuth: [],
			},
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
		},
	},
	post:{
		summary: 'Create a new patient',
		description:
      'This route create a new patient',
		tags: ['Nutritionist'],
		security: [
			{
				bearerAuth: [],
			},
		],
		'requestBody':{
			'content': {
				...jsonContentSwagger(Patient_NewSwagger)
			}
		},
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok')
		},
	}
}

injectParameter(
	[
		{
			name: 'patientId',
			in: 'header',
			description: 'Patient ID to control state',
			required: true,
		},
	],
	PatientId
)

export default {
	'': root,
	...rebasePathSwagger('{patientId}', PatientId),
}
