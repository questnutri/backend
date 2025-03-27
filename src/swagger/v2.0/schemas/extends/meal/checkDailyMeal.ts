export default abstract class SwaggerSchema_Meal_CheckDailyMeal {
    public static schema = {
        type: 'object',
        properties: {
            date: {
                type: 'string',
                description: 'Date to check the daily meal',
                example: '2021-09-20',
                format: 'date'
            }
        },
        required: ['date']
    }
}