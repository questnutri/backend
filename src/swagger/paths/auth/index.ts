import rebasePathSwagger from '../../utils/rebasePath.swagger'
import login from './login'
import register from './register'

export default {
	register: {
		...register
	},
	...rebasePathSwagger('login', login)
}