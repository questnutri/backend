import rebasePathSwagger from '../utils/rebasePath.swagger'
import aliment from './aliment'
import auth from './auth'
import nutritionist from './nutritionist'
import nutritionistTree from './nutritionist/nutritionist.tree'
import patient from './patient'


export default {
    ...auth,
    ...nutritionistTree,
    ...patient,
    ...aliment
}