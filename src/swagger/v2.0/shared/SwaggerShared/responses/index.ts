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
                SwaggerUtil.Response.application_json(
                    SwaggerSchema.Token.schema,
                    SwaggerSchema.Token.example
                )
            ),
        SwaggerResponse.builder()
            .setCode(HttpStatus.UNAUTHORIZED)
            .setDescription('Invalid password')
            .setContent(
                SwaggerUtil.Response.application_json(
                    SwaggerSchema.Error.schema,
                    SwaggerSchema.Error.Login.invalidPassword
                )
            ),
        SwaggerResponse.builder()
            .setCode(HttpStatus.NOT_FOUND)
            .setDescription('Email not found')
            .setContent(
                SwaggerUtil.Response.application_json(
                    SwaggerSchema.Error.schema,
                    SwaggerSchema.Error.Login.emailNotFound
                )
            )
    ];
}