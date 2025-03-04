import { Patient_InfoSchema } from '../patient'

export const Nutritionist_SwaggerSchema = {
	type: 'object',
	properties: {
		firstName: {
			type: 'string'
		},
		email: {
			type: 'string'
		},
		patients: {
			type: 'string'
		},
	}
}

export const NewNutritionist_SwaggerSchema = {
	type: 'object',
	properties: {
		firstName: {
			type: 'string'
		},
		lastName: {
			type: 'string'
		},
		email: {
			type: 'string'
		},
		password: {
			type: 'string'
		}
	}
}

export const NewNutritionist_SwaggerExample = {
	nutritionist: {
		value: {
			firstName: 'John',
			lastName: 'Doe',
			email: 'john.doe@mail.com',
			password: 'hard-password'
		}
	}
}

export const Nutritionist_InfoSchema = {
	type: 'object',
	properties: {
		_id: {
			type: 'string',
			example: '60f5b4d7b9f5b65f8b1c9d9d'
		},
		firstName: {
			type: 'string',
			example: 'John'
		},
		lastName: {
			type: 'string',
			example: 'Doe'
		},
		email: {
			type: 'string',
			example: 'john.doe@mail.com'
		},
		patients: {
			type: 'array',
			items: {
				type: 'string',
				example: '60f5b4d7b9f5b65f8b1c9d9e'
			}
		},
		details: {
			type: 'object',
			properties: {
				rg: {
					type: 'string',
					example: '12.345.678-9'
				},
				cpf: {
					type: 'string',
					example: '123.456.789-00'
				},
				phone: {
					type: 'string',
					example: '(11) 98765-4321'
				},
				birth: {
					type: 'string',
					format: 'date',
					example: '1998-08-28'
				},

			}
		},
		createdAt: {
			type: 'string',
			format: 'date-time',
			example: '2025-02-15T12:00:00Z'
		},
		updatedAt: {
			type: 'string',
			format: 'date-time',
			example: '2025-02-16T15:30:00Z'
		},
		_v: {
			type: 'number',
			example: 1
		}
	}
}


export const Nutritionist_AllPatientsSchema = {
	type: 'array',
	items: Patient_InfoSchema
}

export const Nutritionist_UpdatePatientSchema = {
	type: 'object',
	properties: {
		name: {
			type: 'string',
			example: 'João Silva Rosa'
		},
		email: {
			type: 'string',
			example: 'joão-Silva-Rosa@gmail.com'

		},
		'password': {
			type: 'string',
			example: 'joaoSilvaRosa123',
		},
	}
}

export const Nutritionist_NewPatientSchema = {
	type: 'object',
	'properties': {
		'patient': {
			type: 'object',
			'properties': {
				...Patient_InfoSchema.properties,
				'diets': {
					type: 'array',
					items: {}
				}
			}
		},
		'activationToken': {
			type: 'string'
		}
	}
}