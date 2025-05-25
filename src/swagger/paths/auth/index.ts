import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import { SwaggerParameter, SwaggerParameterSource } from "../../v2.0/class/SwaggerParameter";


export default new SwaggerPath('/auth')
    .withTags(["Auth"], true)
    .withEndpoint(
        new SwaggerEndpoint('login')
            .withMethods(
                SwaggerMethod.post()
                    .setSummary('Do login')
                    .setDescription('This route tries to log in an user (admin, nutritionist and patient)')
                    .withRequestBody(
                        SwaggerShared.RequestBody.login
                    )
                    .withResponses(
                        SwaggerShared.Responses.login
                    )
            )
    )
    .withEndpoint(
        new SwaggerEndpoint('register')
            .withMethods(
                SwaggerMethod.post()
                    .setSummary('Create new nutritionist')
                    .setDescription('This route tries to create a new Nutritionist user')
                    .withRequestBody(
                        new SwaggerContent(SwaggerSchema.Nutritionist.Register) //<< It access schema and example if exist in class
                        // .setSchema(SwaggerSchema.Nutritionist.Register.schema) << Equivalent
                        // .addExample(SwaggerSchema.Nutritionist.Register.example) << Equivalent
                    )
                    .withResponses(
                        [
                            new SwaggerResponse(HttpStatus.CREATED)
                                .setDescription('The created nutritionist')
                                .setContent(
                                    new SwaggerContent().setSchema(SwaggerSchema.Nutritionist.schema)
                                ),
                            new SwaggerResponse(HttpStatus.BAD_REQUEST)
                                .setDescription('Bad request')
                                .setContent(
                                    new SwaggerContent()
                                        .setSchema(SwaggerSchema.Error.schema)
                                        .addExample(SwaggerSchema.Error.Registration.validationErrors)
                                )
                        ]
                    )
            )
    )
    .withEndpoint(
        new SwaggerEndpoint('logout')
            .withMethods(
                SwaggerMethod.post()
                    .setSummary('QuestNutri logout')
                    .setDescription('This route log out an user')
                    .withRequestBody(
                        new SwaggerContent()
                    )
                    .withResponses(
                        [
                        ]
                    )
            )
    )
    .withEndpoint(
        new SwaggerEndpoint('reset-password')
            .withMethods(
                SwaggerMethod.post()
                    .setSummary('Reset user password')
                    .setDescription('This route reset a user password')
                    .withRequestBody(
                        new SwaggerContent(SwaggerSchema.Auth.resetPassword)
                    )
                    .withResponses(
                        [
                        ]
                    )
            )
    )
    .withEndpoint(
        new SwaggerEndpoint('reset-password/validate/{token}')
            .withMethods(
                SwaggerMethod.post()
                    .setSummary('Checks if jwt token is valid for password change')
                    .setDescription('This route checks if a sent jwt token is valid for change an user password')
                    .withParameter(
                        new SwaggerParameter(SwaggerParameterSource.PATH)
                        .name("token")
                        .required()
                        .description("Token to validate")
                        .schema({type: "string"})
                    )
            )
    )
    .withEndpoint(
        new SwaggerEndpoint('reset-password/execute/{token}')
            .withMethods(
                SwaggerMethod.post()
                    .setSummary('Change user password')
                    .setDescription('This route changes a user password')
                    .withRequestBody(
                        new SwaggerContent(SwaggerSchema.Auth.changePassword)
                    )
                    .withParameter(
                        new SwaggerParameter(SwaggerParameterSource.PATH)
                            .name("token")
                            .required()
                            .description("Validated token for password reset")
                            .schema({ type: "string" })
                    )
            )
    )
    // .addBranch(
    //     SwaggerUrlTree.builder()
    //         .setPath('/nutritionist')
    //         .addLeaves(
    //             [
    //                 SwaggerUrlLeaf.builder()
    //                     .setPath('/login')
    //                     .addMethods(
    //                         SwaggerMethod.builder()
    //                             .post()
    //                             .setSummary('Nutritionist login')
    //                             .setDescription('This route tries to log in a nutritionist')
    //                             .setRequestBody(
    //                                 SwaggerShared.RequestBody.login
    //                             )
    //                             .addResponses(
    //                                 SwaggerShared.Responses.login
    //                             )
    //                     )
    //                 ,

    //             ]
    //         )
    // )
    // .addBranch(
    //     SwaggerUrlTree.builder()
    //         .setPath('/patient')
    //         .addLeaf(
    //             SwaggerUrlLeaf.builder()
    //                 .setPath('/login')
    //                 .addMethods(
    //                     SwaggerMethod.builder()
    //                         .post()
    //                         .setSummary('Patient login')
    //                         .setDescription('This route tries to log in a patient')
    //                         .setRequestBody(
    //                             SwaggerShared.RequestBody.login
    //                         )
    //                         .addResponses(
    //                             SwaggerShared.Responses.login
    //                         )
    //                 )
    //         )
    // )
    .toJson()
