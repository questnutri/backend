import { Erro_SwaggerSchema, InvalidPassword_SwaggerExample } from '../../../../schemas_and_examples/errors'
import { EmailNotFound_SwaggerExample } from '../../../../schemas_and_examples/errors/emailNotFound'
import { Login_SwaggerExample, Login_SwaggerSchema } from '../../../../schemas_and_examples/login'
import { Token_SwaggerExample, Token_SwaggerSchema } from '../../../../schemas_and_examples/token'
import jsonContentSwagger from '../../../../utils/jsonContent.swagger'
import swaggerResponse from '../../../../utils/responses/status-code/response.swagger'

export default {
	post: {
		summary: 'Patient login',
		description: 'This route tries to log in a patient user',
		tags: ['Auth'],
		security: [
			{
				bearerAuth: []
			}
		],
		requestBody: {
			content: {
				...jsonContentSwagger(Login_SwaggerSchema, {
					...Login_SwaggerExample
				})
			}
		},
		responses: {
			...swaggerResponse(200, 'Valid login', jsonContentSwagger(Token_SwaggerSchema, {...Token_SwaggerExample})),
			...swaggerResponse(401, 'Invalid password', jsonContentSwagger(Erro_SwaggerSchema, InvalidPassword_SwaggerExample)),
			...swaggerResponse(404, 'Email not found', jsonContentSwagger(Erro_SwaggerSchema, EmailNotFound_SwaggerExample)),
		}

	}
}