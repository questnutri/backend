import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";

export default SwaggerPath.builder()
    .setPath("/food")
    .withTags(["Patient`s food control by nutritionist"])
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods(
                [
                    SwaggerShared.Methods.Food.getAllFoods,
                    SwaggerMethod.post()
                        .setSummary("Create a new food")
                        .setDescription("This route tries to create a new food in a given meal")
                        .withParameter(SwaggerShared.Parameters.patientPathParameter)
                        .withParameter(SwaggerShared.Parameters.dietPathParameter)
                        .withParameter(SwaggerShared.Parameters.mealPathParameter)
                        .withRequestBody(
                            new SwaggerContent(SwaggerSchema.Food.Create)
                        )
                        .withResponses(
                            [
                                new SwaggerResponse(HttpStatus.CREATED)
                                    .setDescription("The created food")
                                    .setContent(
                                        new SwaggerContent(SwaggerSchema.Food)
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
            .setPath("/{foodId}")
            .withTags(["Patient`s food control by nutritionist"])
            .withEndpoint(
                new SwaggerEndpoint()
                    .withMethods(
                        [
                            SwaggerShared.Methods.Food.getFoodById,
                            SwaggerMethod.patch()
                                .setSummary("Update a food by Id.")
                                .setDescription("This route updates a food by id.")
                                .withRequestBody(
                                    new SwaggerContent(SwaggerSchema.Food.Update)
                                )
                                .withParameter(SwaggerShared.Parameters.patientPathParameter)
                                .withParameter(SwaggerShared.Parameters.dietPathParameter)
                                .withParameter(SwaggerShared.Parameters.mealPathParameter)
                                .withParameter(SwaggerShared.Parameters.foodPathParameter)
                                .withResponses(
                                    [
                                        new SwaggerResponse(HttpStatus.OK)
                                            .setDescription("Ok")
                                            .setContent(
                                                new SwaggerContent(SwaggerSchema.Food)
                                            )
                                        ,
                                        SwaggerShared.Responses.internalServerError,
                                        SwaggerShared.Responses.tokenNotProvided
                                    ]
                                ),
                            SwaggerMethod.delete()
                                .setSummary("Delete a food by Id.")
                                .setDescription("This route tries to update a food by id")
                                .withParameter(SwaggerShared.Parameters.patientPathParameter)
                                .withParameter(SwaggerShared.Parameters.dietPathParameter)
                                .withParameter(SwaggerShared.Parameters.mealPathParameter)
                                .withParameter(SwaggerShared.Parameters.foodPathParameter)
                                .withResponses(
                                    [
                                        new SwaggerResponse(HttpStatus.OK)
                                            .setDescription("The food have been deleted")
                                            .setContent(
                                                new SwaggerContent(SwaggerSchema.Food.Delete)
                                            )
                                        ,
                                        SwaggerShared.Responses.internalServerError,
                                        SwaggerShared.Responses.tokenNotProvided
                                    ]
                                )
                        ]
                    )
            )
    )