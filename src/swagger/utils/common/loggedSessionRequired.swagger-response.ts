import badRequest_swaggerResponse from "./badRequest.swagger-response";
import pageNotFound_swaggerResponse from "./pageNotFound.swagger-response";
import tokenNotProvided_swaggerResponse from "./tokenNotProvided.swagger-response";

export default {
    ...tokenNotProvided_swaggerResponse,
    ...badRequest_swaggerResponse,
    ...pageNotFound_swaggerResponse
}