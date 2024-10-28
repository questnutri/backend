import loggedSessionRequiredSwaggerResponse from '../../../utils/common/loggedSessionRequired.swagger-response'
import rebasePathSwagger from '../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../utils/responses/status-code/response.swagger'
import { injectParameter, swapTagMultipleRoot } from '../../../utils/swapDetails.swagger'
import nutritionist from '../../nutritionist'

const root = {
	get: {
		summary: 'All nutritionists',
		description: 'This route returns all nutritionists',
		tags: ['Admin'],
		security: [
			{
				bearerAuth: [],
			},
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok'),
		},
	},
}

const nutritionistRoot = {
	...swapTagMultipleRoot(['Admin'], nutritionist)
}

injectParameter([
	{
		in: 'path',
		name: 'nutritionistId',
		description: 'Nutritionist ID to control state',
		required: true,
		schema: {
			type: 'string',
			minimum: 1
		}
	}
], nutritionistRoot)

export default {
	'': root,
	...rebasePathSwagger('{nutritionistId}', nutritionistRoot) //tem o mesmo root de nutritionist
}