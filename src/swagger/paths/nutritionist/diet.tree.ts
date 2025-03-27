import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import mealTree from "./meal.tree";

export default SwaggerUrlTree.builder()
    .setPath("/diet")
    .addTags(["Patient`s diet control by nutritionist"])
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addMethods(
                [
                    SwaggerShared.Methods.Diet.getAllDiets,
                    SwaggerMethod.builder()
                        .post()
                        .setSummary("Create a new diet")
                        .setDescription("'This route creates a new diet")
                        .setRequestBody(
                            SwaggerContent.builder()
                                .setSchemaAndExample(SwaggerSchema.Diet.Create)
                        )
                        .addResponses([
                            SwaggerResponse.builder()
                                .setCode(HttpStatus.CREATED)
                                .setDescription("Created.")
                                .setContent(
                                    SwaggerContent.builder()
                                        .setSchemaAndExample(
                                            SwaggerSchema.Diet.schema
                                        )
                                ),
                            SwaggerShared.Responses.internalServerError,
                            SwaggerShared.Responses.tokenNotProvided
                        ]),
                ]
            )
    )
    .addBranch(
        SwaggerUrlTree.builder()
            .setPath("/{dietId}")
            .addTags(["Patient`s diet control by nutritionist"])
            .addLeaf(
                SwaggerUrlLeaf.builder()
                    .addMethods([
                        SwaggerShared.Methods.Diet.getDietById,
                        SwaggerMethod.builder()
                            .patch()
                            .setSummary("Updates the selected diet.")
                            .setDescription("This route updates the selected diet.")
                            .setRequestBody(
                                SwaggerContent.builder()
                                    .setSchemaAndExample(
                                        SwaggerSchema.Diet.Update
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
                                                    SwaggerSchema.Diet.schema
                                                )
                                        ),
                                    SwaggerShared.Responses.internalServerError,
                                    SwaggerShared.Responses.tokenNotProvided
                                ]
                            ),
                        SwaggerMethod.builder()
                            .delete()
                            .setSummary("Delete the selected diet.")
                            .setDescription("This route deletes the diet information.")
                            .addResponses(
                                [
                                    SwaggerResponse.builder()
                                        .setCode(HttpStatus.OK)
                                        .setDescription("Ok")
                                        .setContent(
                                            SwaggerContent.builder()
                                                .setSchemaAndExample(
                                                    SwaggerSchema.Diet.Delete
                                                )
                                        ),
                                    SwaggerShared.Responses.tokenNotProvided,
                                    SwaggerShared.Responses.internalServerError
                                ]
                            )
                    ])
            )
            .addBranch(mealTree)
    )