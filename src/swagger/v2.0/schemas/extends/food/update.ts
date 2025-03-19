export default abstract class SwaggerSchema_Food_Update {
    public static schema = {
        type: 'object',
        properties: {
            quantity: {
                type: 'number',
                description: 'Quantity of the food item',
                example: 1
            },
            unit: {
                type: 'string',
                description: 'Unit of measurement for the quantity (e.g., grams, liters)',
                minLength: 1
            },
            obs: {
                type: 'string',
                description: 'Optional notes or observations about the food',
                nullable: true
            }
        },
        required: ['quantity', 'unit']
    }
}