import { NewNutritionist_SwaggerExample, NewNutritionist_SwaggerSchema, Nutritionist_InfoSchema, Nutritionist_SwaggerSchema } from '../../../schemas_and_examples/nutritionist'
import loggedSessionRequiredSwaggerResponse from '../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../utils/jsonContent.swagger'
import swaggerResponse from '../../../utils/responses/status-code/response.swagger'

export default {
	'post': {
		'summary': 'Creates a new nutritionist',
		'description': 'This route registers a new Nutritionist',
		'tags': ['Auth'],
		'security': [
			{
				'bearerAuth': []
			}
		],
		'requestBody': {
			'content': {
				...jsonContentSwagger(NewNutritionist_SwaggerSchema, {
					...NewNutritionist_SwaggerExample
				}),
			}
		},
		'responses': {
			...swaggerResponse(201, 'Nutritionist created', jsonContentSwagger(Nutritionist_InfoSchema)),
			...swaggerResponse(400, 'Bad request'),
		}
	}
}