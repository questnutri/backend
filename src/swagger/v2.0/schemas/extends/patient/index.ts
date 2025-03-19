import SwaggerSchema_Patient_Delete from "./delete"
import SwaggerSchema_Patient_Register from "./register"
import SwaggerSchema_Patient_Update from "./update"

export default abstract class SwaggerSchema_Patient {
    public static schema = {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '65f8a2b7c4d5e6f7890ab123',
            },
            firstName: {
                type: 'string',
                example: 'João',
            },
            email: {
                type: 'string',
                example: 'joao.silva@email.com',
            },
            lastName: {
                type: 'string',
                example: ' da Silva'
            },
            // nutri: {
            // 	type: 'string',
            // 	example: 'Dra. Maria Oliveira',
            // },
            // diets: {
            // 	type: 'array',
            // 	items: GetDiet_Schema,
            // },
            createdAt: {
                type: 'string',
                example: '2025-02-27T14:30:00Z',
            },
            updatedAt: {
                type: 'string',
                example: '2025-02-27T16:45:00Z',
            },
            details: {
                type: 'object',
                properties: {
                    cpf: {
                        type: 'string',
                        example: '111.111.111-11'
                    },
                    phone: {
                        type: 'string',
                        example: '(19) 8 8888-8888'
                    },
                    birth: {
                        type: 'string',
                        example: '2024-11-25T00:00:00.000Z'
                    }
                }
            }
            // _v: {
            // 	type: 'string',
            // 	example: '1',
            // },
        },
    }

    public static Register = class extends SwaggerSchema_Patient_Register { }
    public static Update = class extends SwaggerSchema_Patient_Update { }
    public static Delete = class extends SwaggerSchema_Patient_Delete { }
}