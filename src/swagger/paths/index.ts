import rebasePathSwagger from '../utils/rebasePath.swagger'
import admin from './admin'
import auth from './auth'
import nutritionist from './nutritionist'
import patient from './patient'

export default {
	...rebasePathSwagger('/auth', auth),
	...rebasePathSwagger('/nutritionist', nutritionist),
	...rebasePathSwagger('/patient', patient),
	...rebasePathSwagger('/admin', admin)
}