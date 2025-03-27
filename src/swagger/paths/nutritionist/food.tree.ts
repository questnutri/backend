import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";

export default SwaggerUrlTree.builder()
    .setPath("/food")
    .addTags(["Patient`s food control by nutritionist"])
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addMethods(
                [
                    SwaggerShared.Methods.Food.getAllFoods,
                    SwaggerMethod.builder()
                        .post()
                        .setSummary("Create a new food.")
                        .setDescription("This route creates a new food.")
                        .setRequestBody(
                            SwaggerContent.builder()
                                .setSchemaAndExample(
                                    SwaggerSchema.Food.Create
                                )
                        )
                        .addResponses(
                            [
                                SwaggerResponse.builder()
                                    .setCode(HttpStatus.CREATED)
                                    .setDescription("Created.")
                                    .setContent(
                                        SwaggerContent.builder()
                                            .setSchemaAndExample(
                                                SwaggerSchema.Food
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
            .setPath("/{foodId}")
            .addTags(["Patient`s food control by nutritionist"])
            .addLeaf(
                SwaggerUrlLeaf.builder()
                    .addMethods(
                        [
                            SwaggerShared.Methods.Food.getFoodById,
                            SwaggerMethod.builder()
                                .patch()
                                .setSummary("Update a food by Id.")
                                .setDescription("This route updates a food by Id.")
                                .setRequestBody(
                                    SwaggerContent.builder()
                                        .setSchemaAndExample(
                                            SwaggerSchema.Food.Update
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
                                                        SwaggerSchema.Food
                                                    )
                                            )
                                        ,
                                        SwaggerShared.Responses.internalServerError,
                                        SwaggerShared.Responses.tokenNotProvided
                                    ]
                                ),
                            SwaggerMethod.builder()
                                .delete()
                                .setSummary("Delete a food by Id.")
                                .setDescription("")
                                .addResponses(
                                    [
                                        SwaggerResponse.builder()
                                            .setCode(HttpStatus.OK)
                                            .setDescription("Ok")
                                            .setContent(
                                                SwaggerContent.builder()
                                                    .setSchemaAndExample(
                                                        SwaggerSchema.Food.Delete
                                                    )
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