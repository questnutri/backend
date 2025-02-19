import { GetAllFoods_SchemaSwagger, NewFood_SchemaSwagger } from '../../../../../../../../../schemas_and_examples/food'
import loggedSessionRequiredSwaggerResponse from '../../../../../../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../../../../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../../../../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../../../../../../utils/responses/status-code/response.swagger'
import { injectParameter } from '../../../../../../../../../utils/swapDetails.swagger'
import FoodId from './{foodId}'

export const root = {
	get: {
		summary: 'All food',
		description: 'This route returns all foods.',
		tags: ['Nutritionist'],
		security: [
			{
				bearerAuth: []
			}
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok', jsonContentSwagger(GetAllFoods_SchemaSwagger))
		}

	},
	post: {
		summary: 'Create a new food',
		description: 'This route create a new food.',
		tags: ['Nutritionist'],
		security: [
			{
				'bearerAuth': []
			}
		],
		requestBody: {
			content: {
				...jsonContentSwagger(NewFood_SchemaSwagger)
			}
		},
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(201, 'Successfully created food')
		}
	}
}
injectParameter(
	[

		{
			in: 'path',
			name: 'foodId',
			description: 'Food ID to control state',
			required: true,
			schema: {
				type: 'string',
				minimum: 1
			}
		},
	],
	FoodId
)

export default {
	'': root,
	...rebasePathSwagger('{foodId}', FoodId)
}