import { Login_SwaggerSchema } from './login'
import {NewNutritionist_SwaggerSchema} from './nutritionist'
import { Token_SwaggerSchema } from './token'

export default {
	...NewNutritionist_SwaggerSchema,
	...Login_SwaggerSchema,
	...Token_SwaggerSchema
}