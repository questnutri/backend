import rebasePathSwagger from "../../../utils/rebasePath.swagger"
import { injectParameter, swapTagMultipleRoot } from "../../../utils/swapDetails.swagger"
import nutritionist from "../../nutritionist"

const root = {
    //volta todos os nutricionistas
}

const nutritionistRoot = {
    ...swapTagMultipleRoot(['Admin'], nutritionist)
}

injectParameter([
    {
        "name": "nutritionistId",
        "in": "header",
        "description": "Nutritionist ID to control state",
        "required": true
    }
], nutritionistRoot)

export default {
    '': root,
    ...rebasePathSwagger('{nutritionistId}', nutritionistRoot) //tem o mesmo root de nutritionist
}