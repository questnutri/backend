export default abstract class SwaggerSchema_Nutritionist_Register {
    public static schema = {
        schema: {
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
        },
    }

    public static example = {
        example: {
            nutritionist: {
                value: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@mail.com',
                    password: 'hard-password'
                }
            }
        }
    }
}