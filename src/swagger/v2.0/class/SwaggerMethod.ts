import SwaggerResponse from "./SwaggerResponse";

enum SMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
    DELETE = "delete"
}


/**
 * Class for building Swagger method definitions.
 */
export default class SwaggerMethod {
    private summary: string = "";
    private description: string = "";
    private requestBody: any = {}
    private responses: SwaggerResponse[] = [];
    private method: SMethod = SMethod.GET;
    private security: boolean = false;
    private tags: string[] = [];

    private constructor() { }

    /**
     * Creates a new SwaggerMethod instance with the GET method.
     * @returns {SwaggerMethod} A new instance of SwaggerMethod.
     */
    public static get() {
        let object = new SwaggerMethod();
        object.method = SMethod.GET;
        return object;
    }

    /**
     * Creates a new SwaggerMethod instance with the POST method.
     * @returns {SwaggerMethod} A new instance of SwaggerMethod.
     */
    public static post() {
        let object = new SwaggerMethod();
        object.method = SMethod.POST;
        return object;
    }

    /**
     * Creates a new SwaggerMethod instance with the PUT method.
     * @returns {SwaggerMethod} A new instance of SwaggerMethod.
     */
    public static put() {
        let object = new SwaggerMethod();
        object.method = SMethod.PUT;
        return object;
    }

    /**
    * Creates a new SwaggerMethod instance with the PATCH method.
    * @returns {SwaggerMethod} A new instance of SwaggerMethod.
    */
    public static patch() {
        let object = new SwaggerMethod();
        object.method = SMethod.PATCH;
        return object;
    }

    /**
     * Creates a new SwaggerMethod instance with the DELETE method.
     * @returns {SwaggerMethod} A new instance of SwaggerMethod.
     */
    public static delete() {
        let object = new SwaggerMethod();
        object.method = SMethod.DELETE;
        return object;
    }

    /**
     * Sets the summary for the method.
     * @param {string} summary - The summary description.
     * @returns {SwaggerMethod} The updated instance.
     */
    public setSummary(summary: string) {
        this.summary = summary;
        return this;
    }

    /**
     * Sets the detailed description for the method.
     * @param {string} description - The detailed description.
     * @returns {SwaggerMethod} The updated instance.
     */
    public setDescription(description: string) {
        this.description = description;
        return this;
    }

    /**
     * Sets the request body content for the method.
     * @param {any} content - The request body schema.
     * @returns {SwaggerMethod} The updated instance.
     */
    public setRequestBody(content: any) {
        this.requestBody = {
            ...content
        };
        return this;
    }

    /**
     * Adds one or more response definitions to the method.
     * @param {SwaggerResponse | SwaggerResponse[]} response - A response or an array of responses.
     * @returns {SwaggerMethod} The updated instance.
     */
    public addResponses(response: SwaggerResponse | SwaggerResponse[]) {
        if (response instanceof SwaggerResponse) {
            this.responses.push(response);
        } else {
            this.responses.push(...response);
        }
        return this;
    }

    /**
     * Enables security for the method using bearer authentication.
     * @returns {SwaggerMethod} The updated instance.
     */
    public enableSecurity() {
        this.security = true;
        return this;
    }

    /**
     * Adds tags to categorize the method.
     * @param {string[]} tags - An array of tags.
     * @returns {SwaggerMethod} The updated instance.
     */
    public addTags(tags: string[]) {
        this.tags.push(...tags);
        return this;
    }

    /**
     * Converts the SwaggerMethod instance to a JSON representation.
     * @returns {object} The JSON object for Swagger documentation.
     */
    public toJson() {
        const responses = this.responses.reduce((acc, response) => {
            return { ...acc, ...response.toJson() };
        }, {});

        const json = {
            [this.method]: {
                summary: this.summary,
                description: this.description,
                requestBody: {
                    content: {
                        ...this.requestBody,
                    }
                },
                tags: this.tags,
                security: this.security ? [
                    {
                        bearerAuth: []
                    }
                ] : [],
                responses: responses,
            }
        }
        return json;
    }

}

