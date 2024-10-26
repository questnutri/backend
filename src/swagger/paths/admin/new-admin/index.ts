import { Admin_SchemaSwagger } from '../../../schemas_and_examples/admin'
import loggedSessionRequiredSwaggerResponse from '../../../utils/common/loggedSessionRequired.swagger-response'
import swaggerResponse from '../../../utils/responses/status-code/response.swagger'

const newAdmin = {
	post: {
		summary: 'Creates a new user admin',
		description: 'This route tries to create a new user admin',
		tags: ['Admin'],
		security: [
			{
				bearerAuth: [],
			},
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(201, 'Admin created', Admin_SchemaSwagger),
		},
	},
}

export default{
	'':newAdmin
}
