import SwaggerSchema from "../schemas/SwaggerSchema";
import SwaggerUtil from "./SwaggerUtil";

export default class SwaggerContent {
    private schema: SwaggerSchema | null = null;
    private examples: SwaggerSchema[] = [];

    private constructor() {}

    public static builder() {
        return new SwaggerContent();
    }

    public setSchemaAndExample(swaggerSchema: SwaggerSchema) {
        if("schema" in swaggerSchema) {
            this.schema = swaggerSchema.schema as SwaggerSchema;
        }
        if("example" in swaggerSchema) {
            this.addExample(swaggerSchema.example as SwaggerSchema);
        }
        return this;
    }

    public setSchema(schema: SwaggerSchema) {
        this.schema = schema;
        return this;
    }

    public addExample(example: SwaggerSchema) {
        this.examples.push(example);
        return this;
    }

    public addExamples(examples: SwaggerSchema[]) {
        this.examples.push(...examples);
        return this;
    }

    public toJson() {
        return SwaggerUtil.application_json(
            this.schema,
            ...this.examples
        );
    }


}