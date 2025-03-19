export default abstract class SwaggerSchema_Patient_Update {
    public static schema = {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                example: 'João Silva Rosa'
            },
            email: {
                type: 'string',
                example: 'joão-Silva-Rosa@gmail.com'

            },
            'password': {
                type: 'string',
                example: 'joaoSilvaRosa123',
            },
        }
    }
} 