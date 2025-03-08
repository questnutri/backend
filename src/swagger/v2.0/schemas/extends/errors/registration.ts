export default class SwaggerSchema_Error_Registration {
    public static validationErrors = {
        firstName_Empty: {
            summary: 'First name is empty',
            value: {
                message: 'Validation failed',
                errors: [
                    {
                        property: 'firstName',
                        constraints: {
                            isNotEmpty: 'firstName should not be empty',
                        },
                    },
                ],
            },
        },
        invalid_email: {
            summary: 'Email is not valid',
            value: {
                message: 'Validation failed',
                errors: [
                    {
                        property: 'email',
                        constraints: {
                            isEmail: 'email must be an email',
                            isNotEmpty: 'email should not be empty',
                        },
                    },
                ],
            },
        },
        emailFieldMustBeAnEmail: {
            summary: 'Email must be an email ',
            value: {
                message: 'Validation failed',
                errors: [
                    {
                        property: 'email',
                        constraints: {
                            isEmail: 'email must be an email',
                        },
                    },
                ],
            },
        },
        passwordIsEmpty: {
            summary: 'Password is empty',
            value: {
                message: 'Validation failed',
                errors: [
                    {
                        property: 'password',
                        constraints: {
                            isNotEmpty: 'password should not be empty',
                        },
                    },
                ],
            },
        },
    } 
    
}