import SwaggerContent from "../../../../class/SwaggerContent";
import SwaggerMethod from "../../../../class/SwaggerMethod";
import SwaggerResponse from "../../../../class/SwaggerResponse";
import SwaggerSchema from "../../../../schemas/SwaggerSchema";
import { HttpStatus } from "../../../utils/HttpStatus.enum";
import SharedSwagger_Responses from "../../responses";

export default class SharedSwagger_Methods_Meal {
    public static getAllMeals =
        SwaggerMethod.builder()
            .get()
            .setSummary("Retrieves all meals")
            .setDescription("This route retrievies information about all meals")
            .addResponses(
                [
                    SwaggerResponse.builder()
                        .setCode(HttpStatus.OK)
                        .setDescription("Ok")
                        .setContent(
                            SwaggerContent.builder()
                                .setSchemaAndExample(
                                    SwaggerSchema.Meal
                                )
                        ),
                    SharedSwagger_Responses.internalServerError,
                    SharedSwagger_Responses.tokenNotProvided
                ]
            )
    public static getMealById =
        SwaggerMethod.builder()
            .get()
            .setSummary("Retrieve a meal by Id")
            .setDescription("This route retrieves information about a meal by Id.")
            .addResponses(
                [
                    SwaggerResponse.builder()
                        .setCode(HttpStatus.OK)
                        .setDescription("Ok")
                        .setContent(
                            SwaggerContent.builder()
                                .setSchemaAndExample(
                                    SwaggerSchema.Meal
                                )
                        ),
                    SharedSwagger_Responses.internalServerError,
                    SharedSwagger_Responses.tokenNotProvided
                ]
            )
}