import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";

export default SwaggerUrlTree.builder()
    .setPath("/food")
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addMethods([
                SwaggerShared.Methods.Food.getAllFoods
            ])
    )
    .addBranch(
        SwaggerUrlTree.builder()
            .setPath("/{foodId}")
            .addLeaf(
                SwaggerUrlLeaf.builder()
                    .addMethods([
                        SwaggerShared.Methods.Food.getFoodById
                    ])
            )
    )