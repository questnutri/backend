import SwaggerSchema_Error_Login_Authentication from "./authentication"

export default class SwaggerSchema_Error_Login {
    public static invalidPassword = {
        invalidPassword: {
            summary: "Invalid password",
            value: {
                error: 'Invalid password',
                status: 401,
            },
        }
    }

    public static emailNotFound = {
        emailNotFound: {
            summary: "E-mail not found",
            value: {
                error: 'E-mail not found',
                status: 404
            }
        }
    }

    public static Authentication = class extends SwaggerSchema_Error_Login_Authentication { }
}