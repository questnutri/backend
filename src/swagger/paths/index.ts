import rebasePathSwagger from '../utils/rebasePath.swagger'
import auth from './auth'
import nutritionist from './nutritionist'
import nutritionistTree from './nutritionist/nutritionist.tree'
import patient from './patient'

export default {
    ...auth,
    ...nutritionistTree
    // ...rebasePathSwagger('/nutritionist', nutritionist),
    // ...rebasePathSwagger('/patient', patient),

}