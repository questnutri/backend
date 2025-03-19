import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import dietTree from "./diet.tree";

export default SwaggerUrlTree.builder()
    .setPath("/patient")
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addTags(["Patient control by nutritionist"])
            .addMethods([
                SwaggerMethod.builder()
                    .get()
                    .setSummary("Nutritionist's Patients")
                    .setDescription("This route retrieves all the patients related to a nutritionist")
                    .addResponses(
                        [
                            SwaggerResponse.builder()
                                .setCode(HttpStatus.OK)
                                .setDescription('Ok')
                                .setContent(
                                    SwaggerContent.builder()
                                        .setSchema(
                                            SwaggerSchema.Patient.schema
                                        )
                                ),
                            SwaggerShared.Responses.tokenNotProvided,
                            SwaggerShared.Responses.internalServerError
                        ]
                    ),
                SwaggerMethod.builder()
                    .post()
                    .setSummary("Create a new patient")
                    .setDescription("This route create a new patient")
                    .setRequestBody(
                        SwaggerContent.builder()
                            .setSchemaAndExample(SwaggerSchema.Patient.Register)
                    )
                    .addResponses(
                        [
                            SwaggerResponse.builder()
                                .setCode(HttpStatus.CREATED)
                                .setDescription("Ok")
                                .setContent(
                                    SwaggerContent.builder()
                                        .setSchema(
                                            SwaggerSchema.Patient.schema
                                        )
                                ),
                            SwaggerShared.Responses.tokenNotProvided,
                            SwaggerShared.Responses.internalServerError
                        ]
                    )
            ])
    )
    .addBranch(
        SwaggerUrlTree.builder()
            .setPath("/{patientId}")
            .addBranch(dietTree)
            .addLeaf(
                SwaggerUrlLeaf.builder()
                    .addTags(["Patient control by nutritionist"])
                    .addMethods(
                        [
                            SwaggerMethod.builder()
                                .get()
                                .setSummary("Patient info")
                                .setDescription("This route retrieves basic information related to a patient")
                                .addResponses(
                                    [
                                        SwaggerResponse.builder()
                                            .setCode(HttpStatus.OK)
                                            .setDescription('Ok')
                                            .setContent(
                                                SwaggerContent.builder()
                                                    .setSchema(
                                                        SwaggerSchema.Patient.schema
                                                    )
                                            ),
                                        SwaggerShared.Responses.tokenNotProvided,
                                        SwaggerShared.Responses.internalServerError
                                    ]
                                ),
                            SwaggerMethod.builder()
                                .patch()
                                .setSummary("Update patient info")
                                .setDescription("This route updates basic information related to a patient.")
                                .setRequestBody(
                                    SwaggerContent.builder()
                                        .setSchemaAndExample(SwaggerSchema.Patient.Update)
                                )
                                .addResponses(
                                    [
                                        SwaggerResponse.builder()
                                            .setCode(HttpStatus.OK)
                                            .setDescription('Ok')
                                            .setContent(
                                                SwaggerContent.builder()
                                                    .setSchemaAndExample(
                                                        SwaggerSchema.Patient.Update
                                                    )
                                            ),
                                        SwaggerShared.Responses.tokenNotProvided,
                                        SwaggerShared.Responses.internalServerError
                                    ]
                                ),
                            SwaggerMethod.builder()
                                .delete()
                                .setSummary("Delete patient")
                                .setDescription("This route delete patient selected")
                                .addResponses(
                                    [
                                        SwaggerResponse.builder()
                                            .setCode(HttpStatus.OK)
                                            .setDescription('Ok')
                                            .setContent(
                                                SwaggerContent.builder()
                                                    .setSchema(
                                                        SwaggerSchema.Patient.Delete.schema
                                                    )
                                            ),
                                        SwaggerShared.Responses.tokenNotProvided,
                                        SwaggerShared.Responses.internalServerError
                                    ]
                                ),
                        ]
                    )
            )
    )
