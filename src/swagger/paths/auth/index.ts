import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import { SwaggerParameter } from "../../v2.0/class/SwaggerParameter";


export default SwaggerUrlTree.builder()
    .setPath('/auth')
    .addTags(["Auth"])
    .enableTagSeed()
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .setPath('/login')
            .addMethods(
                SwaggerMethod.builder()
                    .post()
                    .setSummary('QuestNutri Login')
                    .setDescription('This route tries to log in an user')
                    .setRequestBody(
                        SwaggerShared.RequestBody.login
                    )
                    .addResponses(
                        SwaggerShared.Responses.login
                    )
            )
    )
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .setPath('/register')
            .addMethods(
                SwaggerMethod.builder()
                    .post()
                    .setSummary('Creates a new nutritionist')
                    .setDescription('This route registers a new Nutritionist')
                    .setRequestBody(
                        SwaggerContent.builder()
                            .setSchemaAndExample(SwaggerSchema.Nutritionist.Register) //<< It access schema and example if exist in class
                        // .setSchema(SwaggerSchema.Nutritionist.Register.schema) << Equivalent
                        // .addExample(SwaggerSchema.Nutritionist.Register.example) << Equivalent
                    )
                    .addResponses(
                        [
                            SwaggerResponse.builder()
                                .setCode(HttpStatus.CREATED)
                                .setDescription('Nutritionist created')
                                .setContent(
                                    SwaggerContent.builder()
                                        .setSchema(SwaggerSchema.Nutritionist.schema)
                                ),
                            SwaggerResponse.builder()
                                .setCode(HttpStatus.BAD_REQUEST)
                                .setDescription('Bad request')
                                .setContent(
                                    SwaggerContent.builder()
                                        .setSchema(SwaggerSchema.Error.schema)
                                        .addExample(SwaggerSchema.Error.Registration.validationErrors)
                                )
                        ]
                    )
            )
    )
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .setPath('/logout')
            .addMethods(
                SwaggerMethod.builder()
                    .post()
                    .setSummary('QuestNutri logout')
                    .setDescription('This route log out an user')
                    .setRequestBody(
                        SwaggerContent.builder()
                    )
                    .addResponses(
                        [
                        ]
                    )
            )
    )
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .setPath('/reset-password')
            .addMethods(
                SwaggerMethod.builder()
                    .post()
                    .setSummary('Reset user password')
                    .setDescription('This route reset a user password')
                    .setRequestBody(
                        SwaggerContent.builder()
                            .setSchemaAndExample(SwaggerSchema.Auth.resetPassword)
                    )
                    .addResponses(
                        [
                        ]
                    )
            )
    )
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .setPath('/change-password')
            .addMethods(
                SwaggerMethod.builder()
                    .post()
                    .setSummary('Checks if jwt token is valid for password change')
                    .setDescription('This route checks if a sent jwt token is valid for change an user password')
                    .setRequestBody(
                        SwaggerContent.builder()
                            .setSchemaAndExample(SwaggerSchema.Auth.checkPasswordChange)
                    )
            )
    )
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .setPath('/change-password/{token}')
            .addMethods(
                SwaggerMethod.builder()
                    .post()
                    .setSummary('Change user password')
                    .setDescription('This route changes a user password')
                    .setRequestBody(
                        SwaggerContent.builder()
                            .setSchemaAndExample(SwaggerSchema.Auth.changePassword)
                    )
                    .addParameter(
                        SwaggerParameter.inPath()
                            .name('token')
                            .required()
                            .schema({ type: 'string' })
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
