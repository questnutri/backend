import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerSchema_Meal_CheckDailyMeal from "../../v2.0/schemas/extends/meal/checkDailyMeal";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import foodPatientTree from "./foodPatient.tree";

export default new SwaggerPath("/meal")
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods([
                SwaggerShared.Methods.Meal.getAllMeals
            ])
    )
    .withBranch(
        SwaggerPath.builder()
            .setPath("/{mealId}")
            .withEndpoint(
                new SwaggerEndpoint()
                    .withMethods([
                        SwaggerShared.Methods.Meal.getMealById,
                        SwaggerMethod.post()
                            .setSummary("Check daily meal")
                            .setDescription("This route is used to check the daily meal of a patient.")
                            .withRequestBody(
                                new SwaggerContent(SwaggerSchema_Meal_CheckDailyMeal)
                            )
                    ])
            )
            .withBranch(foodPatientTree)
    )