import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerUtil from "../../v2.0/class/SwaggerUtil";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";

export default SwaggerUrlTree.builder()
    .setPath("/nutritionist")
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addTags(['Nutritionist'])
            .addMethods([
                SwaggerMethod
                    .get()
                    .setSummary('Retrieve Nutritionist info')
                    .setDescription('This route retrieves general information about a logged nutritionist')
                    .addResponses(
                        SwaggerResponse.builder()
                            .setCode(HttpStatus.OK)
                            .setDescription('Ok')
                            .setContent(
                                SwaggerUtil.Response.application_json(
                                    SwaggerSchema.Nutritionist.schema
                                )
                            )
                    ),
                SwaggerMethod
                    .patch()
                    .setSummary('Update Nutritionist info')
                    .setDescription('This route updates general information about a logged nutritionist')
                    .setRequestBody(
                        SwaggerUtil.Response.application_json(
                            SwaggerSchema.Nutritionist.Update.schema,
                            SwaggerSchema.Nutritionist.Update.example,
                        )
                    )
                    .addResponses(
                        [
                            SwaggerResponse.builder()
                                .setCode(HttpStatus.OK)
                                .setDescription('Ok')
                                .setContent(
                                    SwaggerUtil.Response.application_json(
                                        SwaggerSchema.Nutritionist.schema
                                    )
                                ),
                            SwaggerShared.Responses.tokenNotProvided,
                            SwaggerShared.Responses.internalServerError
                        ]
                    )
            ])
    )
    .toJson()