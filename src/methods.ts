import * as Basic from "./basic"
import * as Number from "./number"
import * as String from "./string"
import * as Boolean from "./boolean"
import * as Array from "./array"
import * as Object from "./object"

export const methods: Record<string, Function> = global.Object.assign({},
    Basic.methods, Number.methods, String.methods, Boolean.methods, Array.methods, Object.methods
)
