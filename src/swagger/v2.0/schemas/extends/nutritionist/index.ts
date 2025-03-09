import SwaggerSchema_Nutritionist_Register from "./register"
import SwaggerSchema_Nutritionist_Update from "./update"

export default class SwaggerSchema_Nutritionist {
    public static schema = {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '60f5b4d7b9f5b65f8b1c9d9d'
            },
            firstName: {
                type: 'string',
                example: 'John'
            },
            lastName: {
                type: 'string',
                example: 'Doe'
            },
            email: {
                type: 'string',
                example: 'john.doe@mail.com'
            },
            patients: {
                type: 'array',
                items: {
                    type: 'string',
                    example: '60f5b4d7b9f5b65f8b1c9d9e'
                }
            },
            details: {
                type: 'object',
                properties: {
                    rg: {
                        type: 'string',
                        example: '12.345.678-9'
                    },
                    cpf: {
                        type: 'string',
                        example: '123.456.789-00'
                    },
                    phone: {
                        type: 'string',
                        example: '(11) 98765-4321'
                    },
                    birth: {
                        type: 'string',
                        format: 'date',
                        example: '1998-08-28'
                    },

                }
            },
            createdAt: {
                type: 'string',
                format: 'date-time',
                example: '2025-02-15T12:00:00Z'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                example: '2025-02-16T15:30:00Z'
            },
            _v: {
                type: 'number',
                example: 1
            }
        }
    }

    public static Register = class extends SwaggerSchema_Nutritionist_Register { }
    public static Update = class extends SwaggerSchema_Nutritionist_Update { }
}