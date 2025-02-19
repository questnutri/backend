import { GetDiet_Schema } from '../diet'

export const Patient_UpdateSwagger = {
	type: 'object',
	properties: {
		name: {
			type: 'string',
			description: 'Name to be updated',
		},
		email: {
			type: 'string',
			description: 'email to be updated',
		},
		password: {
			type: 'string',
			description: 'password to be updated',
		},
	}
}

export const Patient_NewSwagger = {
	type: 'object',
	properties: {
		name: {
			type: 'string',
			description: 'Name to be created',
		},
		email: {
			type: 'string',
			description: 'email to be created',
		},
		password: {
			type: 'string',
			description: 'password to be created',
		},
	}
}

export const Patient_InfoSchema = {
	type: 'object',
	properties: {
		'_id': {
			type: 'string'
		},
		name: {
			type: 'string'
		},
		email: {
			type: 'string'
		},
		nutri: {
			type: 'string'
		},
		diets: {
			type: 'array',
			items: GetDiet_Schema
		},
		createdAt: {
			type: 'string'
		},
		updatedAt: {
			type: 'string'
		},
		_v: {
			type: 'string'
		}
	}
}

export const NewPatient_Schema = {
	...Patient_InfoSchema,
	
}