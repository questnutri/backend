import rebasePathSwagger from '../utils/rebasePath.swagger'
import auth from './auth'
import nutritionist from './nutritionist'
import patient from './patient'

export default {
	...auth,
	// ...rebasePathSwagger('/nutritionist', nutritionist),
	// ...rebasePathSwagger('/patient', patient),

}