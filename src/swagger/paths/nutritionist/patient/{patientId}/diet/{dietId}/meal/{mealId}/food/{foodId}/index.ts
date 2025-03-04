import { GetFoodById_SchemaSwagger, NewFood_SchemaSwagger } from '../../../../../../../../../../schemas_and_examples/food'
import { NewMeal_SchemaSwagger } from '../../../../../../../../../../schemas_and_examples/meal'
import loggedSessionRequiredSwaggerResponse from '../../../../../../../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../../../../../../../utils/jsonContent.swagger'
import swaggerResponse from '../../../../../../../../../../utils/responses/status-code/response.swagger'
import { Nutritionist_PatientFood_SwaggerTag } from '../../../../../../../../../../utils/tags'

export const root = {
	get: {
		summary: 'Food by ID',
		description: 'This route returns a food by id.',
		tags: [...Nutritionist_PatientFood_SwaggerTag],
		security: [
			{
				bearerAuth: []
			}
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Ok', jsonContentSwagger(GetFoodById_SchemaSwagger))
		}
	},
	patch: {
		summary: 'Update food by id',
		description: 'This route updates a food by id.',
		tags: [...Nutritionist_PatientFood_SwaggerTag],
		security: [
			{
				bearerAuth: []
			}
		],
		requestBody: {
			content: {
				...jsonContentSwagger(NewFood_SchemaSwagger) // utiliza o mesmo schema para criar uma food
			}
		},
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Food updated successfully')
		}
	},
	delete: {
		summary: 'Delete food by id',
		description: 'This route deletes a food by id.',
		tags: [...Nutritionist_PatientFood_SwaggerTag],
		security: [
			{
				bearerAuth: []
			}
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Food deleted successfully')
		}
	}
}

export default {
	'': root
}