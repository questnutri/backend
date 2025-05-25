import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";

export default SwaggerPath.builder()
    .setPath("/food")
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods([
                SwaggerShared.Methods.Food.getAllFoods
            ])
    )
    .withBranch(
        SwaggerPath.builder()
            .setPath("/{foodId}")
            .withEndpoint(
                new SwaggerEndpoint()
                    .withMethods([
                        SwaggerShared.Methods.Food.getFoodById
                    ])
            )
    )