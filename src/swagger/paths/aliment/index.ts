import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerSchema_Aliment from "../../v2.0/schemas/extends/aliment";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";

export default SwaggerUrlTree.builder()
    .setPath("/aliment/taco")
    .addTags(["Aliments"])
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addMethods([
                SwaggerMethod.builder()
                    .get()
                    .setSummary("Retrieve a list of all aliments.")
                    .setDescription("This route retrieves information about all aliments.")
                    .addResponses([
                        SwaggerResponse.builder()
                            .setCode(HttpStatus.OK)
                            .setDescription("Ok")
                            .setContent(
                                SwaggerContent.builder()
                                    .setSchemaAndExample(SwaggerSchema_Aliment)
                            )
                    ])
            ])
    )
    .addBranch(
        SwaggerUrlTree.builder()
            .setPath("/{alimentId}")
            .addLeaf(
                SwaggerUrlLeaf.builder()
                    .addMethods([
                        SwaggerMethod.builder()
                            .get()
                            .setSummary("Retrieve an aliment by its ID.")
                            .setDescription("This route retrieves an aliment using its ID.")
                            .addResponses([
                                SwaggerResponse.builder()
                                    .setCode(HttpStatus.OK)
                                    .setDescription("Ok")
                                    .setContent(
                                        SwaggerContent.builder()
                                            .setSchemaAndExample(SwaggerSchema_Aliment)
                                    )
                            ])
                    ])
            )
    )
    .toJson()