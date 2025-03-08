/**
 * Utility class for handling Swagger response formats.
 */
export default class SwaggerUtil {
    /**
     * Nested class for defining Swagger response formats.
     */
    public static Response = class {
        
        /**
         * Generates a Swagger response definition for application/json content type.
         *
         * @param {any} schema - The schema definition of the response.
         * @param {any} [examples] - Optional examples for the response.
         * @returns {object} The formatted Swagger response object.
         */
        public static application_json(schema: any, examples?: any) {
            return {
                'application/json': {
                    'schema': {
                        ...schema,
                    },
                    'examples': {
                        ...examples
                    }
                }
            }
        }
    }
}