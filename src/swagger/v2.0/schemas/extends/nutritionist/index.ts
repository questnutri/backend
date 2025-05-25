export default class SwaggerSchema_Nutritionist {
    public static Register = class {
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
                },
                password: {
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
                    password: 'hard-password'
                }
            }
        }
    }

    public static Update = class {
        public static schema = {
            type: 'object',
            properties: {
                firstName: {
                    type: 'string'
                },
                lastName: {
                    type: 'string'
                },
                details: {
                    type: 'object',
                    properties: {
                        rg: { type: 'string' },
                        cpf: { type: 'string' },
                        phone: { type: 'string' },
                        birth: { type: 'string', format: 'date' }
                    }
                },
            }
        }

        public static example = {
            nutritionist: {
                value: {
                    firstName: 'John',
                    lastName: 'Doe',
                    details: {
                        rg: '12.345.678-9',
                        cpf: '123.456.789-00',
                        phone: '(11) 98765-4321',
                        birth: '1998-08-28'
                    },
                },
            }
        }
    }

    public static schema = {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string' },
            patients: {
                type: 'array',
                items: { type: 'string' }
            },
            details: {
                type: 'object',
                properties: {
                    rg: { type: 'string' },
                    cpf: { type: 'string' },
                    phone: { type: 'string' },
                    birth: { type: 'string', format: 'date' }
                }
            },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
            _v: { type: 'number' }
        }
    }

    public static example = {
        nutritionist: {
            value: {
                _id: '60f5b4d7b9f5b65f8b1c9d9d',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@mail.com',
                patients: ['60f5b4d7b9f5b65f8b1c9d9e'],
                details: {
                    rg: '12.345.678-9',
                    cpf: '123.456.789-00',
                    phone: '(11) 98765-4321',
                    birth: '1998-08-28'
                },
                createdAt: '2025-02-15T12:00:00Z',
                updatedAt: '2025-02-16T15:30:00Z',
                _v: 1
            }
        }
    }
}