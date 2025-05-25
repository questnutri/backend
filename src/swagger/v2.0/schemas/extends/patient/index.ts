import SwaggerSchema_Patient_Delete from "./delete"

export default abstract class SwaggerSchema_Patient {
    public static schema = {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
            },
            firstName: {
                type: 'string',
            },
            email: {
                type: 'string',
            },
            lastName: {
                type: 'string',
            },
            createdAt: {
                type: 'string',
            },
            updatedAt: {
                type: 'string',
            },
            details: {
                type: 'object',
                properties: {
                    cpf: {
                        type: 'string',
                    },
                    phone: {
                        type: 'string',
                    },
                    birth: {
                        type: 'string',
                    },
                },
            },
        },
    };

    public static example = {
        patient: {
            _id: '65f8a2b7c4d5e6f7890ab123',
            firstName: 'João',
            email: 'joao.silva@email.com',
            lastName: ' da Silva',
            createdAt: '2025-02-27T14:30:00Z',
            updatedAt: '2025-02-27T16:45:00Z',
            details: {
                cpf: '111.111.111-11',
                phone: '(19) 8 8888-8888',
                birth: '2024-11-25T00:00:00.000Z',
            },
        }
    };

    public static Register = class {
        public static schema = {
            type: 'object',
            properties: {
                firstName: {
                    type: 'string',
                    description: 'First name to be created',
                },
                lastName: {
                    type: 'string',
                    description: 'Last name to be created',
                },
                email: {
                    type: 'string',
                    description: 'Email related to the user that must be created',
                },
            },
        };

        public static example = {
            patient: {
                firstName: 'João',
                lastName: 'da Silva',
                email: 'joao.silva@email.com',
            }
        };
    }


    public static Update = class {
        public static schema = {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                },
                password: {
                    type: 'string',
                },
            },
        };

        public static example = {
            patient: {
                name: 'João Silva Rosa',
                email: 'joão-Silva-Rosa@gmail.com',
                password: 'joaoSilvaRosa123',
            }
        };
    }

    public static Delete = class extends SwaggerSchema_Patient_Delete { }
}