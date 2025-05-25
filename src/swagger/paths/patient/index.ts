import SwaggerEndpoint from "../../v2.0/class/SwaggerEndpoint";
import SwaggerPath from "../../v2.0/class/SwaggerPath";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import dietPatientTree from "./dietPatient.tree";

export default new SwaggerPath("/patient")
    .withTags(["Patient"])
    .withEndpoint(
        new SwaggerEndpoint()
            .withMethods([
                SwaggerShared.Methods.Patient.patientInfo,
                SwaggerShared.Methods.Patient.patientUpdate,
            ])
    )
    .withBranch(dietPatientTree)
    .toJson()