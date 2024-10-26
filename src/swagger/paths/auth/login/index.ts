import rebasePathSwagger from '../../../utils/rebasePath.swagger'
import admin from './admin'
import nutritionist from './nutritionist'
import patient from './patient'

export default {
	'admin': {
		...admin,
	},
	'nutritionist': {
		...nutritionist,
	},
	'patient': {
		...patient
	}
}