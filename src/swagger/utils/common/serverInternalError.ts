import { Erro_SwaggerSchema } from '../../schemas_and_examples/errors'
import jsonContentSwagger from '../jsonContent.swagger'
import swaggerResponse from '../responses/status-code/response.swagger'

export default swaggerResponse(500, 'Server Internal Error', jsonContentSwagger(Erro_SwaggerSchema,
	{
		serverInternalError: {
			value: {
				error: 'Server Internal Error',
				status: 500,
			},
		}
	}
))