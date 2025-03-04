import PatientId from '..'
import { Diet_SchemaSwagger, Diet_SwaggerExample, GetDiet_Schema, NewDietResponse_Schema } from '../../../../../schemas_and_examples/diet'
import { Patient_InfoSchema } from '../../../../../schemas_and_examples/patient'
import loggedSessionRequiredSwaggerResponse from '../../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../../utils/responses/status-code/response.swagger'
import { injectParameter } from '../../../../../utils/swapDetails.swagger'
import { Nutritionist_PatientDiet_SwaggerTag } from '../../../../../utils/tags'
import DietId from './{dietId}'

export const root = {
	get: {
		summary: 'Diets of a Patient',
		description: 'This route gets all the diets related to a especific patient',
		tags: [...Nutritionist_PatientDiet_SwaggerTag],
		security: [
			{
				bearerAuth: []
			}
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'All diets', jsonContentSwagger(GetDiet_Schema))
		}

	},
	post: {
		summary: 'Create a new diet',
		description: 'This route creates a new diet',
		tags: [...Nutritionist_PatientDiet_SwaggerTag],
		security: [
			{
				bearerAuth: []
			}
		],
		requestBody: {
			content: {
				...jsonContentSwagger(Diet_SchemaSwagger)
			}
		},
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(201, 'New diet successfully created', jsonContentSwagger(GetDiet_Schema))
		}
	}
}
injectParameter(
	[

		{
			in: 'path',
			name: 'dietId',
			description: 'Diet ID to control state',
			required: true,
			schema: {
				type: 'string',
				minimum: 1
			}
		},
	],
	DietId
)
export default {
	'': root,
	...rebasePathSwagger('{dietId}', DietId),
}