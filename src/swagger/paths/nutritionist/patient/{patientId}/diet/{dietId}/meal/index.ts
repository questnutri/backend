import { GetMeal_SchemaSwagger, NewMeal_SchemaSwagger } from '../../../../../../../schemas_and_examples/meal'
import loggedSessionRequiredSwaggerResponse from '../../../../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../../../../utils/responses/status-code/response.swagger'
import { injectParameter } from '../../../../../../../utils/swapDetails.swagger'
import { Nutritionist_PatientMeal_SwaggerTag } from '../../../../../../../utils/tags'
import MealId from './{mealId}'
export const root = {
	get: {
		summary: 'Select all meals',
		description: 'This route returns information about all the meals',
		tags: [...Nutritionist_PatientMeal_SwaggerTag],
		security: [
			{
				bearerAuth: []
			}
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok', jsonContentSwagger(GetMeal_SchemaSwagger))
		}

	},
	post: {
		summary: 'Create a new meal',
		description: 'This route creates a new meal',
		tags: [...Nutritionist_PatientMeal_SwaggerTag],
		security: [
			{
				bearerAuth: []
			}
		],
		requestBody: {
			content: {
				...jsonContentSwagger(NewMeal_SchemaSwagger)
			}
		},
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(201, 'Successfully created meal', jsonContentSwagger(GetMeal_SchemaSwagger))
		}

	}
}
injectParameter(
	[

		{
			in: 'path',
			name: 'mealId',
			description: 'Meal ID to control state',
			required: true,
			schema: {
				type: 'string',
				minimum: 1
			}
		},
	],
	MealId
)

export default {
	'': root,
	...rebasePathSwagger('{mealId}', MealId)
}