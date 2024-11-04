import { NewMeal_SchemaSwagger } from '../../../../../../../../schemas_and_examples/meal'
import loggedSessionRequiredSwaggerResponse from '../../../../../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../../../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../../../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../../../../../utils/responses/status-code/response.swagger'
import food from './food'

export const root = {
	'get': {
		'summary': 'Meal by Id',
		'description': 'This route returns information about a meal by id.',
		'tags': ['Nutritionist'],
		'security': [
			{
				'bearerAuth': []
			}
		],
		'responses': {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok', jsonContentSwagger(NewMeal_SchemaSwagger)) // retorna as mesma informações que se faz necessario para criar uma meal
		}

	},
	'patch': {
		'summary': 'Update meal',
		'description': 'This route updates information about a meal by id.',
		'tags': ['Nutritionist'],
		'security': [
			{
				'bearerAuth': []
			}
		],
		'requestBody': {
			'content': {
				...jsonContentSwagger(NewMeal_SchemaSwagger) // utiliza o mesmo schema para criar uma meal
			}
		},
		'responses': {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Meal updated successfully.', jsonContentSwagger(NewMeal_SchemaSwagger))
		}

	},
	'delete': {
		'summary': 'Delete meal',
		'description': 'This route deletes a meal by id.',
		'tags': ['Nutritionist'],
		'security': [
			{
				'bearerAuth': []
			}
		],
		'responses': {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Meal deleted successfully')
		}
	}
}

export default {
	'': root,
	...rebasePathSwagger('food', food)
}