export abstract class SwaggerSchema_PaginatedResult {
    public static from(schema: any, example: any) {
        const isArray = schema.type === 'array'
        const itemsSchema = isArray ? schema.items : schema
        const exampleArray = isArray ? (Array.isArray(example) ? example : [example]) : [example]

        return {
            schema: {
                type: 'object',
                properties: {
                    content: {
                        type: 'array',
                        items: itemsSchema
                    },
                    totalItems: { type: 'number' },
                    currentPage: { type: 'number' },
                    pageSize: { type: 'number' },
                    totalPages: { type: 'number' },
                    isFirstPage: { type: 'boolean' },
                    isLastPage: { type: 'boolean' }
                }
            },
            example: {
                default: {
                    value: {
                        content: exampleArray,
                        totalItems: exampleArray.length,
                        currentPage: 1,
                        pageSize: 10,
                        totalPages: 1,
                        isFirstPage: true,
                        isLastPage: true
                    }
                }
            }
        }
    }
}
