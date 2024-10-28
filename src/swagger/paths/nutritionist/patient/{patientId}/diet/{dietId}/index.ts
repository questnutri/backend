import { Diet_SchemaSwagger } from '../../../../../../schemas_and_examples/diet'
import loggedSessionRequiredSwaggerResponse from '../../../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../../../utils/responses/status-code/response.swagger'
import meal from './meal'

export const root = {
	'get': {
		'summary': 'Selectd diet',
		'description': 'This route returns information about the selected diet',
		'tags': ['Nutritionist'],
		'security': [
			{
				'bearerAuth': []
			}
		],
		'responses': {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok')
		}

	}, 
	'patch':{
		'summary': 'Updates the selected diet',
		'description': 'This route updates the selected diet',
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
	},
	'delete':{
		'summary': 'Delete the selected diet',
		'description': 'This route deletes the diet information',
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
			...swaggerResponse(200, 'Diet deleted successfully')
		}
	},
}

export default {
	'': root,
	...rebasePathSwagger('meal', meal)
}