export const Erro_SwaggerSchema = {
	type: 'object',
	properties : {
		error: {
			type: 'string'
		},
		status: {
			type: 'number'
		}
	}
}

export const InvalidPassword_SwaggerExample = {
	invalidPassword:{
		value:{
			error: 'Invalid password',
			status : 401
		}
	}
}

export const ValidationError_SwaggerSchema = {
	type: 'object',
	properties: {
		message: {
			type: 'string'
		},
		errors: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					property: {
						type: 'string'
					},
					constraints: {
						type: 'object',
						additionalProperties: {
							type: 'string'
						}
					}
				}
			}
		}
	}
}

export const ValidationError_SwaggerExample = {
	Validation_FirstName_Empty: {
		summary: 'First name is empty',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'firstName',
					constraints: {
						isNotEmpty: 'firstName should not be empty'
					}
				}
			]
		}
	},
	Validation_Email_Invalid: {
		summary: 'Email is not valid',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'email',
					constraints: {
						isEmail: 'email must be an email',
						isNotEmpty: 'email should not be empty'
					}
				}
			]
		}
	},
	Validation_Email_MustBeAnEmail: {
		summary: 'Email must be an email ',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'email',
					constraints: {
						isEmail: 'email must be an email'
					}
				}
			]
		}
	},
	Validation_Password_Empty: {
		summary: 'Password is empty',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'password',
					constraints: {
						isNotEmpty: 'password should not be empty'
					}
				}
			]
		}
	},
	Validation_FirstNameEmpty_And_Email_Invalid: {
		summary: 'Name empty and Email is not valid',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'firstName',
					constraints: {
						isNotEmpty: 'firstName should not be empty'
					}
				},
				{
					property: 'email',
					constraints: {
						isEmail: 'email must be an email',
						isNotEmpty: 'email should not be empty'
					}
				}
			]
		}
	},
	Validation_FirstName_Empty_And_Email_MustBeAnEmail: {
		summary: 'Name empty and Email must be an email',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'firstName',
					constraints: {
						isNotEmpty: 'firstName should not be empty'
					}
				},
				{
					property: 'email',
					constraints: {
						isEmail: 'email must be an email'
					}
				}
			]
		}
	},
	Validation_Email_Invalid_And_Password_Empty: {
		summary: 'Email invalid and password empty',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'email',
					constraints: {
						isEmail: 'email must be an email',
						isNotEmpty: 'email should not be empty'
					}
				},
				{
					property: 'password',
					constraints: {
						isNotEmpty: 'password should not be empty'
					}
				}
			]
		}
	},
	Validation_Email_MustBeAnEmail_And_Password_Empty: {
		summary: 'Email must be an email and password empty',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'email',
					constraints: {
						isEmail: 'email must be an email'
					}
				},
				{
					property: 'password',
					constraints: {
						isNotEmpty: 'password should not be empty'
					}
				}
			]
		}
	},
	Validation_FirstName_Empty_And_Password_Empty: {
		summary: 'First name empty and password empty',
		value: {
			message: 'Validation failed',
			errors: [
				{
					property: 'firstName',
					constraints: {
						isNotEmpty: 'firstName should not be empty'
					}
				},
				{
					property: 'password',
					constraints: {
						isNotEmpty: 'password should not be empty'
					}
				}
			]
		}
	}
}
  
  

  