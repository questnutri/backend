import loggedSessionRequiredSwaggerResponse from '../../utils/common/loggedSessionRequired.swagger-response'
import patient from './patient'
import rebasePathSwagger from '../../utils/rebasePath.swagger'

export const nutritionistRoot = {
	get: {
		summary: 'Nutritionist info',
		description:
      'This route gets general information about a logged nutritionist',
		tags: ['Nutritionist'],
		security: [
			{
				bearerAuth: [],
			},
		],
		responses: {
			...loggedSessionRequiredSwaggerResponse,
		}
	},
}

export default {
	'': {
		...nutritionistRoot,
	},
	...rebasePathSwagger('patient', patient),
}
