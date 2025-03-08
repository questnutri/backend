import { GetDiet_Schema } from '../diet'

//TODO -> campos incorretos
export const Patient_UpdateSwagger = {
	type: 'object',
	properties: {
		name: {
			type: 'string',
			description: 'Name to be updated',
			example: 'João Mario Da Silva'
		},
		email: {
			type: 'string',
			description: 'email to be updated',
			example: 'joao_mario_silva123@mail.com'
		},
		password: {
			type: 'string',
			description: 'password to be updated',
			format: 'password',
			example: 'joaoSilvaRosa123'
		}
	},
}

export const Patien_DeleteSwagger = {
	type: 'object',
	properties: {
		message: {
			type: 'object',
			example: 'Patient deleted'
		}
	}
}

export const Patient_NewSwagger = {
	type: 'object',
	properties: {
		firstName: {
			type: 'string',
			description: 'First name to be created',
			example: 'João '
		},
		lastName: {
			type: 'string',
			description: 'Last name to be created',
			example: 'da Silva'
		},
		email: {
			type: 'string',
			description: 'email to be created',
			example: 'joao.silva@email.com'
		}
	},
}

export const Patient_InfoSchema = {
	type: 'object',
	properties: {
		_id: {
			type: 'string',
			example: '65f8a2b7c4d5e6f7890ab123',
		},
		firstName: {
			type: 'string',
			example: 'João',
		},
		email: {
			type: 'string',
			example: 'joao.silva@email.com',
		},
		lastName: {
			type: 'string',
			example: ' da Silva'
		},
		// nutri: {
		// 	type: 'string',
		// 	example: 'Dra. Maria Oliveira',
		// },
		// diets: {
		// 	type: 'array',
		// 	items: GetDiet_Schema,
		// },
		createdAt: {
			type: 'string',
			example: '2025-02-27T14:30:00Z',
		},
		updatedAt: {
			type: 'string',
			example: '2025-02-27T16:45:00Z',
		},
		details: {
			type: 'object',
			properties: {
				cpf: {
					type: 'string',
					example: '111.111.111-11'
				},
				phone: {
					type: 'string',
					example: '(19) 8 8888-8888'
				},
				birth: {
					type: 'string',
					example: '2024-11-25T00:00:00.000Z'
				}
			}
		}
		// _v: {
		// 	type: 'string',
		// 	example: '1',
		// },
	},
}


export const NewPatient_Schema = {
	...Patient_InfoSchema,
}
