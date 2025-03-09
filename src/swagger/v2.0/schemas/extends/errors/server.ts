export default abstract class SwaggerSchema_Error_Server {
    public static internalServerError = {

        internalServerError: {
            summary: 'Internal Server Error',
            value: {
                error: 'Server Internal Error',
                status: 500,
            },
        }
    }

}