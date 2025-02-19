import jsonContentSwagger from '../../utils/jsonContent.swagger'
import { Nutritionist_InfoSchema } from '../nutritionist'

export const Admin_SchemaSwagger = {
	type: 'object',
	properties: {
		email: {
			type: 'string',
			description: 'email to log in',
		},
		password: {
			type: 'string',
			description: 'password to be log in',
		},
	}
}

export const Admin_InfoSchema = {
	type: 'object',
	properties: {
		id: {
			type: 'string',
		},
		email: {
			type: 'string'
		},
		createdAt: {
			type: 'string'
		},
		updatedAt: {
			type: 'string'
		},
		_v: {
			type: 'number'
		}
	}
}

export const Admin_AllNutritionistSchema = {
	type: 'array',
	items: Nutritionist_InfoSchema
}
