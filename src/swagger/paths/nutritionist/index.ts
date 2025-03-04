import loggedSessionRequiredSwaggerResponse from '../../utils/common/loggedSessionRequired.swagger-response'
import patient from './patient'
import rebasePathSwagger from '../../utils/rebasePath.swagger'
import swaggerResponse from '../../utils/responses/status-code/response.swagger'
import jsonContentSwagger from '../../utils/jsonContent.swagger'
import { NewNutritionist_SwaggerExample, NewNutritionist_SwaggerSchema, Nutritionist_InfoSchema } from '../../schemas_and_examples/nutritionist'
import { Nutritionist_Basic_SwaggerTag } from '../../utils/tags'
import BadRequest from '../../../errors/BadRequest.error'

export const nutritionistRoot = {
	get: {
		summary: 'Retrieve Nutritionist info',
		description:
			'This route retrieves general information about a logged nutritionist',
		tags: [...Nutritionist_Basic_SwaggerTag],
		security: [
			{
				bearerAuth: [],
			},
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok', jsonContentSwagger(Nutritionist_InfoSchema))
		}
	},
	patch: {
		summary: 'Update Nutritionist info',
		description:
			'This route updates general information about a logged nutritionist',
		tags: [...Nutritionist_Basic_SwaggerTag],
		security: [
			{
				bearerAuth: [],
			},
		],
		requestBody: {
			content: {
				...jsonContentSwagger(NewNutritionist_SwaggerSchema, {
					...NewNutritionist_SwaggerExample
				}),
			}
		},
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok', jsonContentSwagger(Nutritionist_InfoSchema)),
			// ...swaggerResponse(400, 'Bad Request', jsonContentSwagger())
		}
	},
}

export default {
	'': {
		...nutritionistRoot,
	},
	...rebasePathSwagger('patient', patient),
}

