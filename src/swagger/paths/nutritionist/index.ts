import loggedSessionRequiredSwaggerResponse from '../../utils/common/loggedSessionRequired.swagger-response'
import patient from './patient'
import rebasePathSwagger from '../../utils/rebasePath.swagger'
import swaggerResponse from '../../utils/responses/status-code/response.swagger'
import jsonContentSwagger from '../../utils/jsonContent.swagger'
import { Nutritionist_InfoSchema } from '../../schemas_and_examples/nutritionist'

export const nutritionistRoot = {
	get: {
		summary: 'Nutritionist info',
		description:
			'This route gets general information about a logged nutritionist',
		tags: ['Nutritionist'],
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
}

export default {
	'': {
		...nutritionistRoot,
	},
	...rebasePathSwagger('patient', patient),
}
