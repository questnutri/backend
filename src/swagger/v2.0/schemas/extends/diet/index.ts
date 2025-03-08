import SwaggerSchema_Diet_Create from "./create"
import SwaggerSchema_Diet_Update from "./update"

export default abstract class SwaggerSchema_Diet {
    public static schema = {
    }

    public static Create = class extends SwaggerSchema_Diet_Create {}
    public static Update = class extends SwaggerSchema_Diet_Update {}
}