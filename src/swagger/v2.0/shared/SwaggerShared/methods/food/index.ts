import SwaggerContent from "../../../../class/SwaggerContent";
import SwaggerMethod from "../../../../class/SwaggerMethod";
import SwaggerResponse from "../../../../class/SwaggerResponse";
import SwaggerSchema from "../../../../schemas/SwaggerSchema";
import { HttpStatus } from "../../../utils/HttpStatus.enum";
import SharedSwagger_Responses from "../../responses";

export default class SharedSwagger_Methods_Food {
    public static getAllFoods =
        SwaggerMethod.builder()
            .get()
            .setSummary("Retrieves all foods.")
            .setDescription("This route retrieves all foods.")
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
                        ),
                    SharedSwagger_Responses.internalServerError,
                    SharedSwagger_Responses.tokenNotProvided
                ]
            )
    public static getFoodById =
        SwaggerMethod.builder()
            .get()
            .setSummary("Retrieve a food by Id.")
            .setDescription("This route retrieve a food by Id.")
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
                        ),
                    SharedSwagger_Responses.internalServerError,
                    SharedSwagger_Responses.tokenNotProvided
                ]
            )
}