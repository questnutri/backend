import { GetMeal_SchemaSwagger, NewMeal_SchemaSwagger } from '../../../../../../../../schemas_and_examples/meal'
import loggedSessionRequiredSwaggerResponse from '../../../../../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../../../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../../../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../../../../../utils/responses/status-code/response.swagger'
import { Nutritionist_PatientMeal_SwaggerTag } from '../../../../../../../../utils/tags'
import food from './food'

export const root = {
    get: {
        summary: 'Retrieve a meal by Id',
        description: 'This route retrieves information about a meal by Id.',
        tags: [...Nutritionist_PatientMeal_SwaggerTag],
        security: [
            {
                bearerAuth: []
            }
        ],
        responses: {
            ...loggedSessionRequiredSwaggerResponse,
            ...swaggerResponse(200, 'Ok', jsonContentSwagger(GetMeal_SchemaSwagger)) // retorna as mesma informações que se faz necessario para criar uma meal
        }

    },
    patch: {
        summary: 'Update meal',
        description: 'This route updates information about a meal by id.',
        tags: [...Nutritionist_PatientMeal_SwaggerTag],
        security: [
            {
                bearerAuth: []
            }
        ],
        requestBody: {
            content: {
                ...jsonContentSwagger(NewMeal_SchemaSwagger) // utiliza o mesmo schema para criar uma meal
            }
        },
        responses: {
            ...loggedSessionRequiredSwaggerResponse,
            ...swaggerResponse(200, 'Meal updated successfully.', jsonContentSwagger(GetMeal_SchemaSwagger))
        }

    },
    delete: {
        summary: 'Delete meal',
        description: 'This route deletes a meal by id.',
        tags: [...Nutritionist_PatientMeal_SwaggerTag],
        security: [
            {
                bearerAuth: []
            }
        ],
        responses: {
            ...loggedSessionRequiredSwaggerResponse,
            ...swaggerResponse(200, 'Meal deleted successfully')
        }
    }
}

export default {
    '': root,
    ...rebasePathSwagger('food', food)
}