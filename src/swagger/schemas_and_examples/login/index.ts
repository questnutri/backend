export const Login_SwaggerSchema = {
	type: 'object',
	properties: {
		email: {
			type: 'string'
		},
		password: {
			type: 'string'
		}
	}
}

export const Login_SwaggerExample = {
	login: {
		value: {
			email: 'john.doe@mail.com',
			password: 'John_Doe_Password'
		}
	}
}