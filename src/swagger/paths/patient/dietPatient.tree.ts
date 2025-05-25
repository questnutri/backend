import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import { SwaggerParameter, SwaggerParameterSource } from "../../v2.0/class/SwaggerParameter";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import mealPatientTree from "./mealPatient.tree";

export default SwaggerPath.builder()
    .setPath("/diet")
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods([
                SwaggerShared.Methods.Diet.getAllDiets
            ])
    )
    .withBranch(
        SwaggerPath.builder()
            .setPath("/{dietId}")
            .withEndpoint(
                new SwaggerEndpoint()
                    .withMethods([
                        SwaggerShared.Methods.Diet.getDietById
                    ])
            )
            .withBranch(mealPatientTree)
    )