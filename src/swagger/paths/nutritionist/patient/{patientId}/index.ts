import { swapSingleRoot } from "../../../../utils/swapDetails.swagger"
import { patientRoot } from "../../../patient"

const root = {
    "get": {
        ...swapSingleRoot(patientRoot.get, {
            tags: ['Nutritionist'],
        }),
    }

}

export default {
    '': root,
}