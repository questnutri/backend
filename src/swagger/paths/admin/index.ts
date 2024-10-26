import { Admin_SchemaSwagger } from '../../schemas_and_examples/admin'
import loggedSessionRequiredSwaggerResponse from '../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../utils/rebasePath.swagger'
import swaggerResponse from '../../utils/responses/status-code/response.swagger'
import nutritionist from './nutritionist'
import newAdmin from './new-admin'

const root = {
	get: {
		summary: 'Admin info',
		description: 'This route gets general information about a logged admin',
		tags: ['Admin'],
		security: [
			{
				bearerAuth: [],
			},
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok'),
		},
	},
	patch: {
		summary: 'Update administrator information',
		description: 'This route updates administrator information',
		tags: ['Admin'],
		security: [
			{
				bearerAuth: [],
			},
		],
		'requestBody':{
			'content': {
				...jsonContentSwagger(Admin_SchemaSwagger)
			}
		},
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok'),
		},
	},
}

export default {
	'': root,
	...rebasePathSwagger('nutritionist', nutritionist),
	...rebasePathSwagger('new-admin', newAdmin)
}
