import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import mealTree from "./meal.tree";

export default new SwaggerPath("/diet")
    .withTags(["Patient`s diet control by nutritionist"])
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods(
                [
                    SwaggerShared.Methods.Diet.getAllDiets,
                    SwaggerMethod.post()
                        .setSummary("Create a new diet")
                        .setDescription("'This route creates a new diet")
                        .withParameter(SwaggerShared.Parameters.patientPathParameter)
                        .withRequestBody(
                            new SwaggerContent(SwaggerSchema.Diet.Create)
                        )
                        .withResponses([
                            new SwaggerResponse(HttpStatus.CREATED)
                                .setDescription("The created diet")
                                .setContent(
                                    new SwaggerContent(SwaggerSchema.Diet)
                                ),
                            SwaggerShared.Responses.internalServerError,
                            SwaggerShared.Responses.tokenNotProvided
                        ]),
                ]
            )
    )
    .withBranch(
        SwaggerPath.builder()
            .setPath("/{dietId}")
            .withTags(["Patient`s diet control by nutritionist"])
            .withEndpoint(
                new SwaggerEndpoint()
                    .withMethods([
                        SwaggerShared.Methods.Diet.getDietById,
                        SwaggerMethod.patch()
                            .setSummary("Updates the selected diet.")
                            .setDescription("This route updates the selected diet.")
                            .withParameter(SwaggerShared.Parameters.patientPathParameter)
                            .withParameter(SwaggerShared.Parameters.dietPathParameter)
                            .withRequestBody(
                                new SwaggerContent(SwaggerSchema.Diet.Update)
                            )
                            .withResponses(
                                [
                                    new SwaggerResponse(HttpStatus.OK)
                                        .setDescription("The updated diet")
                                        .setContent(
                                            new SwaggerContent(SwaggerSchema.Diet)
                                        ),
                                    SwaggerShared.Responses.internalServerError,
                                    SwaggerShared.Responses.tokenNotProvided
                                ]
                            ),
                        SwaggerMethod.delete()
                            .setSummary("Delete the selected diet")
                            .setDescription("This route deletes the diet information.")
                            .withParameter(SwaggerShared.Parameters.patientPathParameter)
                            .withParameter(SwaggerShared.Parameters.dietPathParameter)
                            .withResponses(
                                [
                                    new SwaggerResponse(HttpStatus.OK)
                                        .setDescription("The diet have been deleted")
                                        .setContent(
                                            new SwaggerContent(SwaggerSchema.Diet.Delete)
                                        ),
                                    SwaggerShared.Responses.tokenNotProvided,
                                    SwaggerShared.Responses.internalServerError
                                ]
                            )
                    ])
            )
            .withBranch(mealTree)
    )