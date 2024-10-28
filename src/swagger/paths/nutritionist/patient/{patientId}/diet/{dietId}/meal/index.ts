import loggedSessionRequiredSwaggerResponse from "../../../../../../../utils/common/loggedSessionRequired.swagger-response";
import jsonContentSwagger from "../../../../../../../utils/jsonContent.swagger";
import swaggerResponse from "../../../../../../../utils/responses/status-code/response.swagger";

export const root = {
    'get': {
        'summary': 'Select all meals',
        'description': 'This route returns information about all the meals',
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
    'post': {
        'summary': 'Create a new meal',
        'description': 'This route creates a new meal',
        'tags': ['Nutritionist'],
        'security': [
            {
                'bearerAuth': []
            }
        ],
        'requestBody': {
            'content': {
                // ...jsonContentSwagger()
            }
        },
        'responses': {
            ...loggedSessionRequiredSwaggerResponse,
            ...swaggerResponse(201, 'Successfully created meal')
        }

    }
}

export default {
    '': root
}