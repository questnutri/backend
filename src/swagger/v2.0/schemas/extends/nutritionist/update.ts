export default abstract class SwaggerSchema_Nutritionist_Update {
    public static schema = {
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
            }
        }
    }

    public static example = {
        nutritionist: {
            value: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@mail.com',
            }
        }
    }
}