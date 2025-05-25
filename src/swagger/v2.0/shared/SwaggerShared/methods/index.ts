import SwaggerContent from "../../../class/SwaggerContent";
import SwaggerMethod from "../../../class/SwaggerMethod";
import SwaggerResponse from "../../../class/SwaggerResponse";
import SwaggerSchema from "../../../schemas/SwaggerSchema";
import { HttpStatus } from "../../utils/HttpStatus.enum";
import SwaggerShared_Parameters from "../parameters";
import SharedSwagger_Responses from "../responses";
import SwaggerShared from "../SwaggerShared";


export default abstract class SharedSwagger_Methods {
    public static Patient = class {
        public static patientInfo =
            SwaggerMethod.get()
                .setSummary("Patient info")
                .withParameter(SwaggerShared_Parameters.patientPathParameter)
                .setDescription("This route retrieves basic information related to a patient")
                .withResponses(
                    [
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription("The selected patient")
                            .setContent(
                                new SwaggerContent(
                                    SwaggerSchema.Patient
                                )
                            ),
                        SharedSwagger_Responses.internalServerError,
                        SharedSwagger_Responses.tokenNotProvided
                    ]
                )

        public static patientUpdate =
            SwaggerMethod.patch()
                .setSummary("Update patient info")
                .withParameter(SwaggerShared_Parameters.patientPathParameter)
                .setDescription("This route updates basic information related to a patient.")
                .withRequestBody(
                    new SwaggerContent(SwaggerSchema.Patient.Update)
                )
                .withResponses(
                    [
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription('The updated patient')
                            .setContent(
                                new SwaggerContent(SwaggerSchema.Patient.Update)
                            ),
                        SharedSwagger_Responses.tokenNotProvided,
                        SharedSwagger_Responses.internalServerError
                    ]
                );
    }
    public static Diet = class {
        public static getAllDiets =
            SwaggerMethod.get()
                .setSummary("Diets of a Patient")
                .withParameter(SwaggerShared_Parameters.patientPathParameter)
                .setDescription("This route tries to retrieve all the diets related to a given patient")
                .withResponses(
                    [
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription("An array including all the diets related to the patient")
                            .setContent(
                                new SwaggerContent(SwaggerSchema.Diet)
                            ),
                        SharedSwagger_Responses.internalServerError,
                        SharedSwagger_Responses.tokenNotProvided
                    ]
                )
        public static getDietById =
            SwaggerMethod.get()
                .setSummary("Selectd diet")
                .setDescription("This route tries to retrieve a diet by id related to a given patient")
                .withParameter(SwaggerShared_Parameters.patientPathParameter)
                .withParameter(SwaggerShared_Parameters.dietPathParameter)
                .withResponses(
                    [
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription("The selected diet related to the patient")
                            .setContent(
                                new SwaggerContent(SwaggerSchema.Diet)
                            ),
                        SharedSwagger_Responses.internalServerError,
                        SharedSwagger_Responses.tokenNotProvided
                    ]
                )
    }
    public static Meal = class {
        public static getAllMeals =
            SwaggerMethod.get()
                .setSummary("Get all meals")
                .withParameter(SwaggerShared_Parameters.patientPathParameter)
                .withParameter(SwaggerShared_Parameters.dietPathParameter)
                .setDescription("This route tries to retrievie all the meals related to a given diet")
                .withResponses(
                    [
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription("An array with all the meals related to the diet")
                            .setContent(
                                new SwaggerContent(SwaggerSchema.Meal)
                            ),
                        SharedSwagger_Responses.internalServerError,
                        SharedSwagger_Responses.tokenNotProvided
                    ]
                )
        public static getMealById =
            SwaggerMethod.get()
                .setSummary("Get meal by id")
                .withParameter(SwaggerShared_Parameters.patientPathParameter)
                .withParameter(SwaggerShared_Parameters.dietPathParameter)
                .withParameter(SwaggerShared_Parameters.mealPathParameter)
                .setDescription("This route tries to retrieve a meal by id related to given diet")
                .withResponses(
                    [
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription("The selected meal")
                            .setContent(
                                new SwaggerContent(SwaggerSchema.Meal)
                            ),
                        SharedSwagger_Responses.internalServerError,
                        SharedSwagger_Responses.tokenNotProvided
                    ]
                )
    }
    public static Food = class {
        public static getAllFoods =
            SwaggerMethod.get()
                .setSummary("Get all foods")
                .withParameter(SwaggerShared_Parameters.patientPathParameter)
                .withParameter(SwaggerShared_Parameters.dietPathParameter)
                .withParameter(SwaggerShared_Parameters.mealPathParameter)
                .setDescription("This route tries to retrieve all foods related to a meal")
                .withResponses(
                    [
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription("An array with all the foods related to the meal")
                            .setContent(
                                new SwaggerContent(SwaggerSchema.Food)
                            ),
                        SharedSwagger_Responses.internalServerError,
                        SharedSwagger_Responses.tokenNotProvided
                    ]
                )
        public static getFoodById =
            SwaggerMethod.get()
                .setSummary("Get food by id")
                .withParameter(SwaggerShared_Parameters.patientPathParameter)
                .withParameter(SwaggerShared_Parameters.dietPathParameter)
                .withParameter(SwaggerShared_Parameters.mealPathParameter)
                .withParameter(SwaggerShared_Parameters.foodPathParameter)
                .setDescription("This route tries to retrieve a food by id, related to a meal")
                .withResponses(
                    [
                        new SwaggerResponse(HttpStatus.OK)
                            .setDescription("The selected food")
                            .setContent(
                                new SwaggerContent(SwaggerSchema.Food)
                            ),
                        SharedSwagger_Responses.internalServerError,
                        SharedSwagger_Responses.tokenNotProvided
                    ]
                )
    }
}