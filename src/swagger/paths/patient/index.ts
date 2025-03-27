import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";
import dietPatientTree from "./dietPatient.tree";

export default SwaggerUrlTree.builder()
    .setPath("/patient")
    .addTags(["Patient"])
    .addLeaf(
        SwaggerUrlLeaf.builder()
            .addMethods([
                SwaggerShared.Methods.Patient.patientInfo,
                SwaggerShared.Methods.Patient.patientUpdate,
            ])
    )
    .addBranch(dietPatientTree)
    .toJson()