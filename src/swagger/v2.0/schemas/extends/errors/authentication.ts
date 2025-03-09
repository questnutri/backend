export default abstract class SwaggerSchema_Error_Login_Authentication {
    public static tokenNotProvided = {
        tokenNotProvided: {
            summary: 'Token not provided',
            value: {
                error: 'Token not provided',
                status: 401,
            },
        }
    }
}