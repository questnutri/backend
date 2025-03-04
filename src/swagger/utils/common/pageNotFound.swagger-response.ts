import { Erro_SwaggerSchema } from '../../schemas_and_examples/errors'
import jsonContentSwagger from '../jsonContent.swagger'
import swaggerResponse from '../responses/status-code/response.swagger'

export default swaggerResponse(404, 'Page not found', jsonContentSwagger(Erro_SwaggerSchema, 
	{
		pageNotFound: {
			value: {
				error: 'Page not found',
				status: 404,
			},
		}
	}
))