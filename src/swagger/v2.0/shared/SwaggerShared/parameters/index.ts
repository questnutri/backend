import { SwaggerParameter, SwaggerParameterSource } from "../../../class/SwaggerParameter"

export default abstract class SwaggerShared_Parameters {
    public static patientPathParameter = new SwaggerParameter(SwaggerParameterSource.PATH)
        .required()
        .name("patientId")
        .description("Target patient's id")
        .schema({ type: 'string' })

    public static dietPathParameter = new SwaggerParameter(SwaggerParameterSource.PATH)
        .required()
        .name("dietId")
        .description("Target diet id")
        .schema({ type: 'string' })

    public static mealPathParameter = new SwaggerParameter(SwaggerParameterSource.PATH)
        .required()
        .name("mealId")
        .description("Target meal id")
        .schema({ type: 'string' })

    public static foodPathParameter = new SwaggerParameter(SwaggerParameterSource.PATH)
        .required()
        .name("foodId")
        .description("Target food's id")
        .schema({ type: 'string' })
}