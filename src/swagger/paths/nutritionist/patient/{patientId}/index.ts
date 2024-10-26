import loggedSessionRequiredSwaggerResponse from '../../../../utils/common/loggedSessionRequired.swagger-response'
import rebasePathSwagger from '../../../../utils/rebasePath.swagger'
import swaggerResponse from '../../../../utils/responses/status-code/response.swagger'
import { swapSingleRoot } from '../../../../utils/swapDetails.swagger'
import { patientRoot } from '../../../patient'
import diet from './diet'

const root = {
	get: {
		...swapSingleRoot(patientRoot.get, {
			tags: ['Nutritionist'],
		}),
	},
	patch: {
		...swapSingleRoot(patientRoot.patch, {
			tags: ['Nutritionist'],
		}),
	},
	delete: {
		summary: 'Delete patient',
		description: 'This route delete patient selected',
		tags: ['Nutritionist'],
		security: [
			{
				bearerAuth: [],
			},
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
			...swaggerResponse(200, 'Patient deleted'),
		},
	},
}

export default {
	'': root,
	...rebasePathSwagger('diet', diet),
}
