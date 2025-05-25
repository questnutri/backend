import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import dietTree from "./diet.tree";
import { SwaggerParameter, SwaggerParameterSource } from "../../v2.0/class/SwaggerParameter";

export default SwaggerPath.builder()
    .setPath("/patient")
    .withEndpoint(
        new SwaggerEndpoint()
            .withTags(["Nutritionist"])
            .withMethods([
                SwaggerMethod.get()
                    .setSummary("Nutritionist's Patients")
                    .setDescription("This route tries to retrieves all the patients related to a nutritionist")
                    .withResponses(
                        [
                            new SwaggerResponse(HttpStatus.OK)
                                .setDescription('All registed Patients to the logged nutritionist')
                                .setContent(
                                    new SwaggerContent(SwaggerSchema.Patient)
                                ),
                            SwaggerShared.Responses.tokenNotProvided,
                            SwaggerShared.Responses.internalServerError
                        ]
                    ),
                SwaggerMethod.post()
                    .setSummary("Create a new patient")
                    .setDescription("This route tries to create a new patient")
                    .withRequestBody(
                        new SwaggerContent(SwaggerSchema.Patient.Register)
                    )
                    .withResponses(
                        [
                            new SwaggerResponse(HttpStatus.CREATED)
                                .setDescription("The created patient")
                                .setContent(
                                    new SwaggerContent(SwaggerSchema.Patient)
                                ),
                            SwaggerShared.Responses.tokenNotProvided,
                            SwaggerShared.Responses.internalServerError
                        ]
                    )
            ])
    )
    .withBranch(
        SwaggerPath.builder()
            .setPath("/{patientId}")
            .withEndpoint(
                new SwaggerEndpoint()
                    .withTags(["Patient control by Nutritionist"])
                    .withMethods(
                        [
                            SwaggerShared.Methods.Patient.patientInfo,
                            SwaggerShared.Methods.Patient.patientUpdate,
                            SwaggerMethod.delete()
                                .setSummary("Delete patient")
                                .setDescription("This route tries to delete a selected patient")
                                .withParameter(SwaggerShared.Parameters.patientPathParameter)
                                .withResponses(
                                    [
                                        new SwaggerResponse(HttpStatus.OK)
                                            .setDescription('Patient has been deleted')
                                            .setContent(
                                                new SwaggerContent(SwaggerSchema.Patient.Delete)
                                            ),
                                        SwaggerShared.Responses.tokenNotProvided,
                                        SwaggerShared.Responses.internalServerError
                                    ]
                                ),
                        ]
                    )
            )
            .withBranch(dietTree)
    )
