import SwaggerContent from "../../../class/SwaggerContent";
import SwaggerResponse from "../../../class/SwaggerResponse";
import SwaggerUtil from "../../../class/SwaggerUtil";
import SwaggerSchema from "../../../schemas/SwaggerSchema";
import { HttpStatus } from "../../utils/HttpStatus.enum";

export default class SharedSwagger_Responses {
    public static login = [
        SwaggerResponse.builder()
            .setCode(HttpStatus.OK)
            .setDescription('Valid login')
            .setContent(
                SwaggerContent.builder()
                    .setSchemaAndExample(SwaggerSchema.Token)
            ),
        SwaggerResponse.builder()
            .setCode(HttpStatus.UNAUTHORIZED)
            .setDescription('Invalid password')
            .setContent(
                SwaggerContent.builder()
                    .setSchema(SwaggerSchema.Error.schema)
                    .addExample(SwaggerSchema.Error.Login.invalidPassword)
            ),
        SwaggerResponse.builder()
            .setCode(HttpStatus.NOT_FOUND)
            .setDescription('Email not found')
            .setContent(
                SwaggerContent.builder()
                    .setSchema(SwaggerSchema.Error.schema)
                    .addExample(SwaggerSchema.Error.Login.emailNotFound)
            )
    ];

    public static tokenNotProvided =
        SwaggerResponse.builder()
            .setCode(HttpStatus.UNAUTHORIZED)
            .setDescription('Token not provided')
            .setContent(
                SwaggerContent.builder()
                    .setSchema(SwaggerSchema.Error.schema)
                    .addExample(SwaggerSchema.Error.Login.Authentication.tokenNotProvided)
            )

    public static internalServerError =
        SwaggerResponse.builder()
            .setCode(HttpStatus.INTERNAL_SERVER_ERROR)
            .setDescription('Internal server error')
            .setContent(
                SwaggerContent.builder()
                    .setSchema(SwaggerSchema.Error.schema)
                    .addExample(SwaggerSchema.Error.Server.internalServerError)
            )
}