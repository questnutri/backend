import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";

export default SwaggerUrlTree.builder()
    .setPath("/diet")
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addMethods([
                SwaggerShared.Methods.Diet.getAllDiets
            ])
    )
    .addBranch(
        SwaggerUrlTree.builder()
            .setPath("/{dietId}")
            .addLeaf(
                SwaggerUrlLeaf.builder()
                    .addMethods([
                        SwaggerShared.Methods.Diet.getDietById
                    ])
            )
    )