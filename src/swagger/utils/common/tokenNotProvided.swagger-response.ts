import { Erro_SwaggerSchema } from '../../schemas_and_examples/errors'
import jsonContentSwagger from '../jsonContent.swagger'
import swaggerResponse from '../responses/status-code/response.swagger'

export default swaggerResponse(401, `Token not provided`,jsonContentSwagger(Erro_SwaggerSchema, 
	{
		tokenNotProvided: {
			value: {
				error: 'Token not provided',
				status: 401,
			},
	    }
	}
))