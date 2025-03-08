export default abstract class SwaggerSchema_Patient_Register {
    public static schema = {
        type: 'object',
        properties: {
            firstName: {
                type: 'string',
                description: 'First name to be created',
                example: 'João '
            },
            lastName: {
                type: 'string',
                description: 'Last name to be created',
                example: 'da Silva'
            },
            email: {
                type: 'string',
                description: 'email to be created',
                example: 'joao.silva@email.com'
            }
        },
    }
}