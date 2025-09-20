import { MethodGroup } from "slightning-coco-widget"

import * as Basic from "./basic"
import * as Number from "./number"
import * as String from "./string"
import * as Boolean from "./boolean"
import * as Array from "./array"
import * as Object from "./object"

export const types: MethodGroup = {
    label: "数据",
    contents: [
        Basic.types, Number.types, String.types, Boolean.types, Array.types, Object.types
    ]
}
