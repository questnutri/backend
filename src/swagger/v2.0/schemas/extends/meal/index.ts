import SwaggerSchema_Food from "../food"
import SwaggerSchema_Meal_CheckDailyMeal from "./checkDailyMeal"
import SwaggerSchema_Meal_Create from "./create"
import SwaggerSchema_Meal_Delete from "./delete"
import SwaggerSchema_Meal_Update from "./update"

export default abstract class SwaggerSchema_Meal {
    public static schema = {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '65f8a2b7c4d5e6f7890ab789',
            },
            name: {
                type: 'string',
                description: 'Name of the meal',
                example: 'Café da Manhã',
            },
            hour: {
                type: 'string',
                description: 'Time of the meal in HH:mm format',
                example: '07:30',
            },
            obs: {
                type: 'string',
                description: 'Optional notes or observations about the meal',
                example: 'Evitar café com açúcar',
            },
            daysOfWeek: {
                type: 'array',
                description: 'Days of the week when the meal is scheduled',
                items: {
                    type: 'string',
                    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                },
                example: ['Monday', 'Wednesday', 'Friday'],
            },
            foods: {
                type: 'array',
                items: {
                    ...SwaggerSchema_Food.schema
                },
            },
        },
    }

    public static Create = class extends SwaggerSchema_Meal_Create { }
    public static Update = class extends SwaggerSchema_Meal_Update { }
    public static Delete = class extends SwaggerSchema_Meal_Delete { }
    public static CheckDailyMeal = class extends SwaggerSchema_Meal_CheckDailyMeal { }
}