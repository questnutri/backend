import { SwaggerContract } from "./SwaggerContract.interface";

export enum SwaggerParameterSource {
    QUERY = "query",
    HEADER = "header",
    PATH = "path"
}

export class SwaggerParameter implements SwaggerContract {
    public constructor(providedIn: SwaggerParameterSource) {
        this.inAux = providedIn;
    }
    
    private inAux: string;
    private schemaAux: any = "string";
    private requiredAux: boolean = false;
    private nameAux: string | undefined;
    private descriptionAux: string | undefined;

    public static fromQuery() {
        return new SwaggerParameter(SwaggerParameterSource.QUERY);
    }
    public static fromHeader() {
        return new SwaggerParameter(SwaggerParameterSource.QUERY);
    }
    public static fromPath() {
        return new SwaggerParameter(SwaggerParameterSource.QUERY);
    }

    public schema(schema: any) {
        this.schemaAux = schema;
        return this;
    }

    public required() {
        this.requiredAux = true;
        return this;
    }

    public name(name: string) {
        this.nameAux = name;
        return this;
    }

    public description(description: string) {
        this.descriptionAux = description;
        return this;
    }

    public toJson() {
        return {
            in: this.inAux,
            name: this.nameAux,
            required: this.requiredAux,
            schema: this.schemaAux,
            description: this.descriptionAux,
        }
    }
    
}