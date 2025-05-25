import SwaggerContent from "../../../class/SwaggerContent";
import SwaggerResponse from "../../../class/SwaggerResponse";
import SwaggerUtil from "../../../class/SwaggerUtil";
import SwaggerSchema from "../../../schemas/SwaggerSchema";
import { HttpStatus } from "../../utils/HttpStatus.enum";

export default class SharedSwagger_Responses {
    public static login = [
        new SwaggerResponse(HttpStatus.OK)
            .setDescription('Valid login')
            .setContent(
                new SwaggerContent(SwaggerSchema.Token)
            ),
        new SwaggerResponse(HttpStatus.UNAUTHORIZED)
            .setDescription('Invalid password')
            .setContent(
                new SwaggerContent()
                    .setSchema(SwaggerSchema.Error.schema)
                    .addExample(SwaggerSchema.Error.Login.invalidPassword)
            ),
        new SwaggerResponse(HttpStatus.NOT_FOUND)
            .setDescription('Email not found')
            .setContent(
                new SwaggerContent()
                    .setSchema(SwaggerSchema.Error.schema)
                    .addExample(SwaggerSchema.Error.Login.emailNotFound)
            )
    ];

    public static tokenNotProvided =
        new SwaggerResponse(HttpStatus.UNAUTHORIZED)
            .setDescription('Token not provided')
            .setContent(
                new SwaggerContent()
                    .setSchema(SwaggerSchema.Error.schema)
                    .addExample(SwaggerSchema.Error.Login.Authentication.tokenNotProvided)
            )

    public static internalServerError =
        new SwaggerResponse(HttpStatus.INTERNAL_SERVER_ERROR)
            .setDescription('Internal server error')
            .setContent(
                new SwaggerContent()
                    .setSchema(SwaggerSchema.Error.schema)
                    .addExample(SwaggerSchema.Error.Server.internalServerError)
            )
}