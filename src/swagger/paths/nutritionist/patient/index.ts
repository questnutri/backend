import { Nutritionist_AllPatientsSchema } from '../../../schemas_and_examples/nutritionist'
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
			...swaggerResponse(200, 'Ok', jsonContentSwagger(Nutritionist_AllPatientsSchema))
		},
	},
	post: {
		summary: 'Create a new patient',
		description:
			'This route create a new patient',
		tags: ['Nutritionist'],
		security: [
			{
				bearerAuth: [],
			},
		],
		'requestBody': {
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
			in: 'path',
			name: 'patientId',
			description: 'Patient ID to control state',
			required: true,
			schema: {
				type: 'string',
				minimum: 1
			}
		},
	],
	PatientId
)

export default {
	'': root,
	...rebasePathSwagger('{patientId}', PatientId),
}
