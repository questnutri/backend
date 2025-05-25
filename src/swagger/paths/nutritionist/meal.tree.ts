import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import foodTree from "./food.tree";
import { SwaggerParameter, SwaggerParameterSource } from "../../v2.0/class/SwaggerParameter";

const patientPathParameter = new SwaggerParameter(SwaggerParameterSource.PATH)
    .required()
    .name("patientId")
    .description("Target patient's id")
    .schema({ type: 'string' })


const mealPathParameter = new SwaggerParameter(SwaggerParameterSource.PATH)
    .required()
    .name("mealId")
    .description("Target meal's id")
    .schema({ type: 'string' })


export default SwaggerPath.builder()
    .setPath("/meal")
    .withTags(["Patient`s meal control by nutritionist"])
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods(
                [
                    SwaggerShared.Methods.Meal.getAllMeals,
                    SwaggerMethod.post()
                        .setSummary("Create a new meal")
                        .setDescription("This route tries to creates a new meal for a given patient")
                        .withParameter(SwaggerShared.Parameters.patientPathParameter)
                        .withParameter(SwaggerShared.Parameters.dietPathParameter)
                        .withRequestBody(
                            new SwaggerContent(SwaggerSchema.Meal.Create)
                        )
                        .withResponses(
                            [
                                new SwaggerResponse(HttpStatus.CREATED)
                                    .setDescription("Created")
                                    .setContent(
                                        new SwaggerContent(SwaggerSchema.Meal)
                                    ),
                                SwaggerShared.Responses.internalServerError,
                                SwaggerShared.Responses.tokenNotProvided
                            ]
                        )
                ]
            )
    )
    .withBranch(
        SwaggerPath.builder()
            .setPath("/{mealId}")
            .withTags(["Patient`s meal control by nutritionist"])
            .withEndpoint(
                new SwaggerEndpoint()
                    .withMethods(
                        [
                            SwaggerShared.Methods.Meal.getMealById,
                            SwaggerMethod.patch()
                                .setSummary("Update meal by id")
                                .setDescription("This route tries to update a meal by id for a given patient")
                                .withParameter(SwaggerShared.Parameters.patientPathParameter)
                                .withParameter(SwaggerShared.Parameters.dietPathParameter)
                                .withParameter(SwaggerShared.Parameters.mealPathParameter)
                                .withRequestBody(
                                    new SwaggerContent(SwaggerSchema.Meal.Update)
                                )
                                .withResponses(
                                    [
                                        new SwaggerResponse(HttpStatus.OK)
                                            .setDescription("The updated meal")
                                            .setContent(
                                                new SwaggerContent(SwaggerSchema.Meal)
                                            ),
                                        SwaggerShared.Responses.internalServerError,
                                        SwaggerShared.Responses.tokenNotProvided
                                    ]
                                ),
                            SwaggerMethod.delete()
                                .setSummary("Delete meal by Id")
                                .setDescription("This route tries to delete a meal by id for a given patient")
                                .withParameter(SwaggerShared.Parameters.patientPathParameter)
                                .withParameter(SwaggerShared.Parameters.dietPathParameter)
                                .withParameter(SwaggerShared.Parameters.mealPathParameter)
                                .withResponses(
                                    [
                                        new SwaggerResponse(HttpStatus.OK)
                                            .setDescription("The meal has been deleted")
                                            .setContent(
                                                new SwaggerContent(SwaggerSchema.Meal.Delete)
                                            ),
                                        SwaggerShared.Responses.internalServerError,
                                        SwaggerShared.Responses.tokenNotProvided
                                    ]
                                )
                        ]
                    )
            )
            .withBranch(foodTree)
    )