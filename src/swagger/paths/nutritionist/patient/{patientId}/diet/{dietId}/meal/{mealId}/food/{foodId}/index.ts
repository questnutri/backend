import loggedSessionRequiredSwaggerResponse from "../../../../../../../../../../utils/common/loggedSessionRequired.swagger-response"
import swaggerResponse from "../../../../../../../../../../utils/responses/status-code/response.swagger"

export const root = {
    'get': {
        'summary': 'Food by ID',
        'description': 'This route returns a food by id.',
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
    'patch': {
        'summary': 'Update food by id',
        'description': 'This route updates a food by id.',
        'tags': ['Nutritionist'],
        'security': [
            {
                'bearerAuth': []
            }
        ],
        'responses': {
            ...loggedSessionRequiredSwaggerResponse,
            ...swaggerResponse(200, 'Food updated successfully')
        }
    },
    'delete': {
        'summary': 'Delete food by id',
        'description': 'This route deletes a food by id.',
        'tags': ['Nutritionist'],
        'security': [
            {
                'bearerAuth': []
            }
        ],
        'responses': {
            ...loggedSessionRequiredSwaggerResponse,
            ...swaggerResponse(200, 'Food deleted successfully')
        }
    }
}

export default {
    '': root
}