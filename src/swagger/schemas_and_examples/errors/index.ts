export const Erro_SwaggerSchema = {
	type: 'object',
	properties: {
		error: {
			type: 'string',
		},
		status: {
			type: 'number',
		},
	},
}

export const InvalidPassword_SwaggerExample = {
	invalidPassword: {
		value: {
			error: 'Invalid password',
			status: 401,
		},
	},
}