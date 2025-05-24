import { SwaggerForest } from "./SwaggerForest.interface";

export class SwaggerParameter implements SwaggerForest {
    private constructor(providedIn: 'query' | 'header' | 'path') {
        this.inAux = providedIn;
    }
    
    private inAux: string;
    private schemaAux: any = "string";
    private requiredAux: boolean = false;
    private nameAux: string | undefined;
    private descriptionAux: string | undefined;
    
    public static inPath() {
        return new SwaggerParameter('path');
    }

    public static inQuery() {
        return new SwaggerParameter('query');
    }

    public static inHeader() {
        return new SwaggerParameter('header');
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