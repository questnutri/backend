import SwaggerSchema_Food_Create from "./create"
import SwaggerSchema_Food_Update from "./update"

export default abstract class SwaggerSchema_Food {
    public static schema = {

    }

    public static Create = class extends SwaggerSchema_Food_Create {}
    public static Update = class extends SwaggerSchema_Food_Update {}
}