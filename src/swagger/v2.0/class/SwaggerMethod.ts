import SwaggerContent from "./SwaggerContent";
import { SwaggerParameter } from "./SwaggerParameter";
import SwaggerResponse from "./SwaggerResponse";

enum SwaggerHttpMethods {
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
    private requestBody: SwaggerContent | null = null;
    private responses: SwaggerResponse[] = [];
    private method: SwaggerHttpMethods = SwaggerHttpMethods.GET;
    private security: boolean = false;
    private tags: string[] = [];
    private parameters: SwaggerParameter[] = [];


    private constructor(method: SwaggerHttpMethods) {
        this.method = method;
    }

    /**
     * Creates a new SwaggerMethod instance with the GET method.
     * @returns {SwaggerMethod} A new instance of SwaggerMethod.
     */
    public static get() {
        return new SwaggerMethod(SwaggerHttpMethods.GET);
    }

    /**
     * Creates a new SwaggerMethod instance with the POST method.
     * @returns {SwaggerMethod} A new instance of SwaggerMethod.
     */
    public static post() {
        return new SwaggerMethod(SwaggerHttpMethods.POST);
    }

    /**
     * Creates a new SwaggerMethod instance with the PUT method.
     * @returns {SwaggerMethod} A new instance of SwaggerMethod.
     */
    public static put() {
        return new SwaggerMethod(SwaggerHttpMethods.PUT);
    }

    /**
    * Creates a new SwaggerMethod instance with the PATCH method.
    * @returns {SwaggerMethod} A new instance of SwaggerMethod.
    */
    public static patch() {
        return new SwaggerMethod(SwaggerHttpMethods.PATCH);
    }

    /**
     * Creates a new SwaggerMethod instance with the DELETE method.
     * @returns {SwaggerMethod} A new instance of SwaggerMethod.
     */
    public static delete() {
        return new SwaggerMethod(SwaggerHttpMethods.DELETE);
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


    public withRequestBody(request: SwaggerContent) {
        this.requestBody = request;
        return this;
    }

    /**
     * Adds one or more response definitions to the method.
     * @param {SwaggerResponse | SwaggerResponse[]} response - A response or an array of responses.
     * @returns {SwaggerMethod} The updated instance.
     */
    public withResponses(response: SwaggerResponse | SwaggerResponse[]) {
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


    public withParameter(parameter: SwaggerParameter) {
        this.parameters.push(parameter);
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


        const params = this.parameters.map(param => param.toJson());

        const json: any = {
            [this.method]: {
                summary: this.summary,
                description: this.description,
                tags: this.tags,
                security: this.security ? [
                    {
                        bearerAuth: []
                    }
                ] : [],
                responses: responses,
                parameters: params
            }
        }
        if (this.requestBody) {
            json[this.method].requestBody = {
                content: {}
            };
            json[this.method].requestBody.content = this.requestBody.toJson();
        }

        return json;
    }

    public static copy(ref: SwaggerMethod) {

        let copied = new SwaggerMethod(ref.method);
        copied.summary = ref.summary;
        copied.description = ref.description;
        copied.requestBody = ref.requestBody;
        copied.responses = [...ref.responses];
        copied.method = ref.method;
        copied.security = ref.security;
        copied.tags = [...ref.tags];
        copied.parameters = [...ref.parameters];

        return copied;

    }

}

