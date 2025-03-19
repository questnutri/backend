import SwaggerSchema_Meal from "../meal"
import SwaggerSchema_Diet_Create from "./create"
import SwaggerSchema_Diet_Delete from "./delete"
import SwaggerSchema_Diet_Update from "./update"

export default abstract class SwaggerSchema_Diet {
    public static schema = {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    example: 'Primeira dieta',
                },
                _id: {
                    type: 'string',
                    example: '65f8a2b7c4d5e6f7890ab456',
                },
                meals: {
                    type: 'array',
                    items: SwaggerSchema_Meal.schema
                },
                createdAt: {
                    type: 'string',
                    example: '2025-02-27T10:00:00Z',
                },
                updatedAt: {
                    type: 'string',
                    example: '2025-02-27T12:30:00Z',
                },
            },
        },
    }

    public static Create = class extends SwaggerSchema_Diet_Create { }
    public static Update = class extends SwaggerSchema_Diet_Update { }
    public static Delete = class extends SwaggerSchema_Diet_Delete { }
}