export const Patient_UpdateSwagger = {
	'type': 'object',
	'properties': {
		'name': {
			'type': 'string',
			'description': 'Name to be updated',
		},
		'email': {
			'type': 'string',
			'description': 'email to be updated',
		},
		'password': {
			'type': 'string',
			'description': 'password to be updated',
		},
	}
}

export const Patient_NewSwagger = {
	'type': 'object',
	'properties': {
		'name': {
			'type': 'string',
			'description': 'Name to be created', 
		},
		'email': {
			'type': 'string',
			'description': 'email to be created', 
		},
		'password': {
			'type': 'string',
			'description': 'password to be created',
		},
	}
}