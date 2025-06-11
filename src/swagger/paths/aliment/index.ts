import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import { SwaggerParameter } from "../../v2.0/class/SwaggerParameter";

export default new SwaggerPath("/aliments/taco")
    .withTags(["Aliments"])
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods([
                SwaggerMethod.get()
                    .setSummary("Get all aliments")
                    .setDescription("This route tries to retrieve information about all aliments")
                    .withParameters(
                        [
                            SwaggerParameter.fromQuery()
                                .name("name")
                                .description("Aliment's searching name")
                                .schema({ type: "string" }),
                            SwaggerParameter.fromQuery()
                                .name("group")
                                .description("Aliment's searching group")
                                .schema({ type: "string" })
                        ]
                    )
                    .withResponses([
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription("An array with all the aliments")
                            .setContent(
                                new SwaggerContent(SwaggerSchema.PaginatedResult.from(SwaggerSchema.Aliment.schema, SwaggerSchema.Aliment.example))
                            )
                    ])
            ])
    )
    .withBranch(
        new SwaggerPath("/{alimentId}")
            .withEndpoint(
                new SwaggerEndpoint()
                    .withMethods([
                        SwaggerMethod.get()
                            .setSummary("Retrieve an aliment by its ID.")
                            .setDescription("This route retrieves an aliment using its ID.")
                            .withResponses([
                                new SwaggerResponse(HttpStatus.OK)
                                    .setDescription("Ok")
                                    .setContent(
                                        new SwaggerContent(SwaggerSchema.Aliment)
                                    )
                            ])
                    ])
            )
    )
    .toJson()