import { Patient_InfoSchema } from '../patient'

export const Nutritionist_SwaggerSchema = {
	'type': 'object',
	'properties': {
		'name': {
			'type': 'string'
		},
		'email': {
			'type': 'string'
		},
		'patients': {
			'type': 'string'
		},
	}
}

export const NewNutritionist_SwaggerSchema = {
	'type': 'object',
	'properties': {
		'name': {
			'type': 'string'
		},
		'email': {
			'type': 'string'
		},
		'password': {
			'type': 'string'
		}
	}
}

export const NewNutritionist_SwaggerExample = {
	'nutritionist': {
		'value': {
			'name': 'Pedro',
			'email': 'newNutritionist123@gmail.com',
			'password': 'nutritionist123'
		}
	}
}

export const Nutritionist_InfoSchema = {
	'type': 'object',
	'properties': {
		'_id': {
			'type': 'string'
		},
		'name': {
			'type': 'string'
		},
		'email': {
			'type': 'string'
		},
		'createdAt': {
			'type': 'string'
		},
		'updatedAt': {
			'type': 'string'
		},
		'patients': {
			'type': 'array',
			'items': {
				'type': 'string'
			}
		},
		'_v':{
			'type': 'number'
		}
	}
}

export const Nutritionist_AllPatientsSchema = {
	'type': 'array',
	'items': Patient_InfoSchema
}

export const Nutritionist_UpdatePatientSchema = {
	'type': 'object',
	'properties': {
		'name': {
			'type': 'string',
		},
		'email': {
			'type': 'string',
		},
		'password': {
			'type': 'string',
		},
	}
}

export const Nutritionist_NewPatientSchema = {
	'type': 'object',
	'properties': {
		'patient': {
			...Patient_InfoSchema
		},
		'activationToken': {
			'type': 'string'
		}
	}
}