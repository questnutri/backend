import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerSchema_Meal_CheckDailyMeal from "../../v2.0/schemas/extends/meal/checkDailyMeal";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import foodPatientTree from "./foodPatient.tree";

export default SwaggerUrlTree.builder()
    .setPath("/meal")
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addMethods([
                SwaggerShared.Methods.Meal.getAllMeals
            ])
    )
    .addBranch(
        SwaggerUrlTree.builder()
            .setPath("/{mealId}")
            .addLeaf(
                SwaggerUrlLeaf.builder()
                    .addMethods([
                        SwaggerShared.Methods.Meal.getMealById,
                        SwaggerMethod.builder()
                            .post()
                            .setSummary("Check daily meal")
                            .setDescription("This route is used to check the daily meal of a patient.")
                            .setRequestBody(
                                SwaggerContent.builder()
                                    .setSchemaAndExample(SwaggerSchema_Meal_CheckDailyMeal)
                            )
                    ])
            )
            .addBranch(foodPatientTree)
    )