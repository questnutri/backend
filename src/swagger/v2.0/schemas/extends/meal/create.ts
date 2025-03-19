export default abstract class SwaggerSchema_Meal_Create {
    public static schema = {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Name of the meal',
                example: "Café da tarde.",
                minLength: 1
            },
            hour: {
                type: 'string',
                description: 'Time of the meal in HH:mm format',
                pattern: '^([01]?[0-9]|2[0-3]):([0-5][0-9])$',
                example: '14:30'
            },
            obs: {
                type: 'string',
                description: 'Optional notes or observations about the meal',
                nullable: true
            },
            daysOfWeek: {
                type: 'array',
                description: 'Days of the week when the meal is scheduled',
                items: {
                    type: 'string',
                    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                }
            }
        },
        required: ['name', 'hour', 'daysOfWeek']
    }
}