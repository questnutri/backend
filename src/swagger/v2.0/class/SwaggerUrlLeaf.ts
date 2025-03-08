import SwaggerMethod from "./SwaggerMethod";

/**
 * Class representing a Swagger URL leaf, used to build API endpoint documentation.
 */
export default class SwaggerUrlLeaf {
    private pathName: string = "";
    private methods: SwaggerMethod[] = [];
    private tags: string[] = [];

    private constructor() { }

    /**
     * Creates a new instance of SwaggerUrlLeaf using the builder pattern.
     * @returns {SwaggerUrlLeaf} A new instance of SwaggerUrlLeaf.
     */
    public static builder() {
        return new SwaggerUrlLeaf();
    }

    /**
     * Sets the path for the URL leaf.
     * @param {string} path - The API endpoint path.
     * @returns {SwaggerUrlLeaf} The updated instance.
     */
    public setPath(path: string) {
        if (path?.at(0) == '/') path = path.slice(1)
        this.pathName = path;
        return this;
    }

    /**
     * Adds a parent path to the current path.
     * @param {string | null} fatherPath - The parent path to prepend.
     */
    public addFatherPath(fatherPath: string | null) {
        if (fatherPath) {
            this.pathName = fatherPath + "/" + this.pathName
        }
    }

    /**
     * Adds methods to the URL leaf.
     * @param {SwaggerMethod | SwaggerMethod[]} method - A method or an array of methods.
     * @returns {SwaggerUrlLeaf} The updated instance.
     */
    public addMethods(method: SwaggerMethod | SwaggerMethod[]) {
        if (method instanceof SwaggerMethod) {
            this.methods.push(method);
        } else {
            this.methods.push(...method);
        }
        return this;
    }

    /**
     * Adds tags to the URL leaf.
     * @param {string[]} tags - An array of tags.
     * @returns {SwaggerUrlLeaf} The updated instance.
     */
    public addTags(tags: string[]) {
        this.tags.push(...tags);
        return this;
    }

    /**
     * Converts the SwaggerUrlLeaf instance to a JSON representation.
     * @returns {object} The JSON object for Swagger documentation.
     */
    public toJson() {
        const methodsJson = this.methods.reduce((acc, method) => {
            method.addTags(this.tags);
            return { ...acc, ...method.toJson() };
        }, {});

        const res: any = {
            [this.pathName]: {
                ...methodsJson,
            }
        };

        return res;
    }

}