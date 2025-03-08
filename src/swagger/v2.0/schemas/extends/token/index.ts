export default class SwaggerSchema_Token {
    public static schema = {
        type: 'object',
        properties: {
            token: {
                type: 'string',
                description: 'JWT token',
            },
        },
    };

    public static example = {
        jwt: {
            summary: "JWT Token",
            value: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3ODZkMTBhZjcwZmQwNWM1YTg4YmJmOSIsInJvbGUiOiJudXRyaXRpb25pc3QiLCJpYXQiOjE3Mzk4Nzg0MzYsImV4cCI6MTczOTg4MjAzNn0.PTJr4SdrLqgWO7yMxWiS5yAjpgtS6iSYkFoHzkApDBk',
            },
        },
    }
}