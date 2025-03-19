import SwaggerSchema_Food_Create from "./create"
import SwaggerSchema_Food_Delete from "./delete"
import SwaggerSchema_Food_Update from "./update"

export default abstract class SwaggerSchema_Food {
    public static schema = {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    description: 'Id food',
                    example: '6748ad34e32acd1891da66c6'
                },
                quantity: {
                    type: 'number',
                    description: 'Quantity of the food item',
                    example: 200,
                },
                aliment: {
                    type: 'string',
                    description: 'Id aliment food',
                    example: '6740da1fe4da69d48df0d5bc'
                },
                unit: {
                    type: 'string',
                    description: 'Unit of measurement for the quantity (e.g., grams, liters)',
                    example: 'grams',
                },
                obs: {
                    type: 'string',
                    description: 'Optional notes or observations about the food',
                    example: 'Preferir integral',
                },
            },
        },
    }

    public static Create = class extends SwaggerSchema_Food_Create { }
    public static Update = class extends SwaggerSchema_Food_Update { }
    public static Delete = class extends SwaggerSchema_Food_Delete { }
}