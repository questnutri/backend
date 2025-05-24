export default abstract class SwaggerSchema_Auth {
    public static resetPassword = {
        schema: {
            type: 'object',
            properties: {
                email: {
                    type: 'string',
                }
            }
        },

        example: {
            user: {
                value: {
                    email: 'john.doe@mail.com'
                }
            }
        }
    }

    public static changePassword = {
        schema: {
            type: 'object',
            properties: {
                newPassword: {
                    type: 'string',
                }
            }
        },

        example: {
            user: {
                value: {
                    newPassword: 'harder-password'
                }
            }
        }
    }

    public static checkPasswordChange = {
        schema: {
            type: 'object',
            properties: {
                token: {
                    type: 'string',
                }
            }
        },

        example: {
            user: {
                value: {
                    token: 'jwt-token'
                }
            }
        }
    }
}
