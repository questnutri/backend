import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import patientTree from "./patient.tree";

// export default SwaggerUrlTree.builder()
//     .setPath("/nutritionist")
//     .addTags(["Nutritionist"])
//     .addLeaf(
//         SwaggerUrlLeaf.builder()
//             .addTags(['Nutritionist'])
//             .addMethods([
//                 SwaggerMethod.builder()
//                     .get()
//                     .setSummary('Retrieve Nutritionist info')
//                     .setDescription('This route retrieves general information about a logged nutritionist')
//                     .addResponses(
//                         SwaggerResponse.builder()
//                             .setCode(HttpStatus.OK)
//                             .setDescription('Ok')
//                             .setContent(
//                                 SwaggerContent.builder()
//                                     .setSchema(SwaggerSchema.Nutritionist.schema)
//                             )
//                     ),
//                 SwaggerMethod.builder()
//                     .patch()
//                     .setSummary('Update Nutritionist info')
//                     .setDescription('This route updates general information about a logged nutritionist')
//                     .setRequestBody(
//                         SwaggerContent.builder()
//                             .setSchemaAndExample(SwaggerSchema.Nutritionist)
//                     )
//                     .addResponses(
//                         [
//                             SwaggerResponse.builder()
//                                 .setCode(HttpStatus.OK)
//                                 .setDescription('Ok')
//                                 .setContent(
//                                     SwaggerContent.builder()
//                                         .setSchema(SwaggerSchema.Nutritionist.schema)
//                                 ),
//                             SwaggerShared.Responses.tokenNotProvided,
//                             SwaggerShared.Responses.internalServerError
//                         ]
//                     )
//             ])
//     )
//     .toJson()

const tree = new SwaggerPath("/nutritionists")
    .withTags(["Nutritionist"])
    .withAuthorizationToken({ seed: true, deep: true })
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods([
                SwaggerMethod.get()
                    .setSummary('Retrieve Nutritionist info')
                    .setDescription('This route retrieves general information about a logged nutritionist')
                    .withResponses(
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription('Retrived nutritionist information')
                            .setContent(
                                new SwaggerContent(SwaggerSchema.Nutritionist)
                            )
                    ),
                SwaggerMethod.patch()
                    .setSummary('Update Nutritionist info')
                    .setDescription('This route updates general information about a logged nutritionist')
                    .withRequestBody(
                        new SwaggerContent(SwaggerSchema.Nutritionist.Update)
                    )
                    .withResponses(
                        [
                            new SwaggerResponse(HttpStatus.OK)
                                .setDescription('The updated nutritionist')
                                .setContent(
                                    new SwaggerContent(SwaggerSchema.Nutritionist)
                                ),
                            SwaggerShared.Responses.tokenNotProvided,
                            SwaggerShared.Responses.internalServerError
                        ]
                    )
            ])
    )
    .withBranch(patientTree)
    .toJson()

export default tree;