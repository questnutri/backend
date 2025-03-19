import SwaggerContent from "../../../../class/SwaggerContent";
import SwaggerMethod from "../../../../class/SwaggerMethod";
import SwaggerResponse from "../../../../class/SwaggerResponse";
import SwaggerSchema from "../../../../schemas/SwaggerSchema";
import { HttpStatus } from "../../../utils/HttpStatus.enum";
import SharedSwagger_Responses from "../../responses";
import SwaggerShared from "../../SwaggerShared";

export default abstract class SharedSwagger_Methods_Patient {
    public static patientInfo =
        SwaggerMethod.builder()
            .get()
            .setSummary("Patient info")
            .setDescription("This route retrieves basic information related to a patient")
            .addResponses(
                [
                    SwaggerResponse.builder()
                        .setCode(HttpStatus.OK)
                        .setDescription("Ok")
                        .setContent(
                            SwaggerContent.builder()
                                .setSchemaAndExample(
                                    SwaggerSchema.Patient
                                )
                        ),
                    SharedSwagger_Responses.internalServerError,
                    SharedSwagger_Responses.tokenNotProvided
                ]
            )
}