import { Patien_DeleteSwagger } from '../../../../schemas_and_examples/patient'
import loggedSessionRequiredSwaggerResponse from '../../../../utils/common/loggedSessionRequired.swagger-response'
import jsonContentSwagger from '../../../../utils/jsonContent.swagger'
import rebasePathSwagger from '../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../utils/responses/status-code/response.swagger'
import { swapSingleRoot } from '../../../../utils/swapDetails.swagger'
import { Nutritionist_Patient_SwaggerTag } from '../../../../utils/tags'
import patientRoot from '../../../patient'
import diet from './diet'

const root = {
    get: {
        ...swapSingleRoot(patientRoot.get, {
            tags: [...Nutritionist_Patient_SwaggerTag],
        }),
    },
    patch: {
        ...swapSingleRoot(patientRoot.patch, {
            tags: [...Nutritionist_Patient_SwaggerTag],
        }),
    },
    delete: {
        summary: 'Delete patient',
        description: 'This route delete patient selected',
        tags: [...Nutritionist_Patient_SwaggerTag],
        security: [
            {
                bearerAuth: [],
            },
        ],
        responses: {
            ...loggedSessionRequiredSwaggerResponse,
            ...swaggerResponse(200, 'Patient deleted', jsonContentSwagger(Patien_DeleteSwagger)),
        },
    },
}

export default {
    '': root,
    ...rebasePathSwagger('diet', diet),
}
