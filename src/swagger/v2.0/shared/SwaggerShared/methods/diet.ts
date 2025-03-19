import SwaggerContent from "../../../class/SwaggerContent";
import SwaggerMethod from "../../../class/SwaggerMethod";
import SwaggerResponse from "../../../class/SwaggerResponse";
import SwaggerSchema from "../../../schemas/SwaggerSchema";
import { HttpStatus } from "../../utils/HttpStatus.enum";
import SwaggerShared from "../SwaggerShared";

export default class SharedSwagger_Methods_Diet {
    public static getAllDiets =
        SwaggerMethod.builder()
            .get()
            .setSummary("Diets of a Patient")
            .setDescription("This route gets all the diets related to a especific patient")
            .addResponses(
                [
                    SwaggerResponse.builder()
                        .setCode(HttpStatus.OK)
                        .setDescription("Ok")
                        .setContent(
                            SwaggerContent.builder()
                                .setSchemaAndExample(
                                    SwaggerSchema.Diet
                                )
                        ),
                    // SwaggerShared.Responses.internalServerError,
                    // SwaggerShared.Responses.tokenNotProvided
                ]
            )
    public static getDietById =
        SwaggerMethod.builder()
            .get()
            .setSummary("Selectd diet.")
            .setDescription("This route returns information about the selected diet.")
            .addResponses(
                [
                    SwaggerResponse.builder()
                        .setCode(HttpStatus.OK)
                        .setDescription("Ok")
                        .setContent(
                            SwaggerContent.builder()
                                .setSchemaAndExample(
                                    SwaggerSchema.Diet
                                )
                        ),
                    // SwaggerShared.Responses.internalServerError,
                    // SwaggerShared.Responses.tokenNotProvided
                ]
            )
}
