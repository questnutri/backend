import { Diet_SchemaSwagger, Diet_SwaggerExample } from '../../../../../schemas_and_examples/diet'
import loggedSessionRequiredSwaggerResponse from '../../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../../utils/responses/status-code/response.swagger'
import DietId from './{dietId}'

export const root = {
	'get': {
		'summary': 'Diets of a Patient',
		'description': 'This route gets all the diets related to a especific patient',
		'tags': ['Nutritionist'],
		'security': [
			{
				'bearerAuth': []
			}
		],
		'responses': {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'All diets')
		}

	}, 
	'post':{
		'summary': 'Create a new diet',
		'description': 'This route creates a new diet',
		'tags': ['Nutritionist'],
		'security': [
			{
				'bearerAuth': []
			}
		],
		'requestBody':{
			'content': {
				...jsonContentSwagger(Diet_SchemaSwagger)
			}
		},
		'responses': {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(201, 'New diet successfully created')
		}
	}
}

export default {
	'': root,
	...rebasePathSwagger('{dietId}', DietId),
}