export default class SwaggerSchema_Login {
    public static schema = {
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
    
    public static example = {
        login: {
            value: {
                email: 'john.doe@mail.com',
                password: 'John_Doe_Password'
            }
        }
    }
} 