import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import foodTree from "./food.tree";

export default SwaggerUrlTree.builder()
    .setPath("/meal")
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addTags(["Patient`s meal control by nutritionist"])
            .addMethods(
                [
                    SwaggerShared.Methods.Meal.getAllMeals,
                    SwaggerMethod.builder()
                        .post()
                        .setSummary("Create a new meal")
                        .setDescription("This route creates a new meal")
                        .setRequestBody(
                            SwaggerContent.builder()
                                .setSchemaAndExample(
                                    SwaggerSchema.Meal.Create
                                )
                        )
                        .addResponses(
                            [
                                SwaggerResponse.builder()
                                    .setCode(HttpStatus.CREATED)
                                    .setDescription("Created")
                                    .setContent(
                                        SwaggerContent.builder()
                                            .setSchemaAndExample(
                                                SwaggerSchema.Meal
                                            )
                                    ),
                                SwaggerShared.Responses.internalServerError,
                                SwaggerShared.Responses.tokenNotProvided
                            ]
                        )
                ]
            )
    )
    .addBranch(
        SwaggerUrlTree.builder()
            .setPath("/{mealId}")
            .addLeaf(
                SwaggerUrlLeaf.builder()
                    .addTags(["Patient`s meal control by nutritionist"])
                    .addMethods(
                        [
                            SwaggerShared.Methods.Meal.getMealById,
                            SwaggerMethod.builder()
                                .patch()
                                .setSummary("Update a meal by Id.")
                                .setDescription("This route updates a meal by Id.")
                                .setRequestBody(
                                    SwaggerContent.builder()
                                        .setSchemaAndExample(
                                            SwaggerSchema.Meal.Update
                                        )
                                )
                                .addResponses(
                                    [
                                        SwaggerResponse.builder()
                                            .setCode(HttpStatus.OK)
                                            .setDescription("Ok")
                                            .setContent(
                                                SwaggerContent.builder()
                                                    .setSchemaAndExample(
                                                        SwaggerSchema.Meal
                                                    )
                                            ),
                                        SwaggerShared.Responses.internalServerError,
                                        SwaggerShared.Responses.tokenNotProvided
                                    ]
                                ),
                            SwaggerMethod.builder()
                                .delete()
                                .setSummary("Delete a meal by Id.")
                                .setDescription("This route deletes a meal by Id.")
                                .addResponses(
                                    [
                                        SwaggerResponse.builder()
                                            .setCode(HttpStatus.OK)
                                            .setDescription("Ok")
                                            .setContent(
                                                SwaggerContent.builder()
                                                    .setSchemaAndExample(
                                                        SwaggerSchema.Meal.Delete
                                                    )
                                            ),
                                        SwaggerShared.Responses.internalServerError,
                                        SwaggerShared.Responses.tokenNotProvided
                                    ]
                                )
                        ]
                    )
            )
            .addBranch(foodTree)
    )