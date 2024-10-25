import rebasePathSwagger from "../../utils/rebasePath.swagger"
import nutritionist from "./nutritionist"

const root = {
}

export default {
    '': root,
    ...rebasePathSwagger('nutritionist', nutritionist)
}