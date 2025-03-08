import { HttpStatus } from "../shared/utils/HttpStatus.enum";

/**
 * Class for building Swagger response definitions.
 */
export default class SwaggerResponse {
    private constructor() {}
    private code: HttpStatus = HttpStatus.OK;
    private description: string = "Description not set"
    private contents: any[] = []

    /**
     * Creates a new instance of SwaggerResponse using the builder pattern.
     * @returns {SwaggerResponse} A new instance of SwaggerResponse.
     */
    public static builder() {
        return new SwaggerResponse();
    }

    /**
     * Sets the HTTP status code for the response.
     * @param {HttpStatus} code - The HTTP status code.
     * @returns {SwaggerResponse} The updated instance.
     */
    public setCode(code: HttpStatus) {
        this.code = code;
        return this;
    }

    /**
     * Sets the description of the response.
     * @param {string} description - A brief description of the response.
     * @returns {SwaggerResponse} The updated instance.
     */
    public setDescription(description: string) {
        this.description = description;
        return this;
    }

    /**
     * Adds content to the response.
     * @param {any} content - The content schema for the response.
     * @returns {SwaggerResponse} The updated instance.
     */
    public setContent(content: any) {
        this.contents.push(content);
        return this;
    }

    /**
     * Converts the SwaggerResponse instance to a JSON representation.
     * @returns {object} The JSON object for Swagger documentation.
     */
    public toJson() {
        const contents = this.contents.reduce((acc, content) => {
            return { ...acc, ...content };
        }, {});

        return {
            [this.code]: {
                description: this.description,
                content: contents
            }
        }
    }
}