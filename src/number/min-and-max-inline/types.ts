import { MethodTypes, MutatorType, NumberType } from "slightning-coco-widget"
import { TypeType } from "../min-and-max"

export const types: MethodTypes = {
    key: "number__minAndMaxInline",
    label: "数字最小和最大单行",
    block: [
        {
            key: "type",
            label: "类型",
            type: TypeType
        }, {
            key: "numbers",
            label: "数字",
            type: new MutatorType({
                block: [{
                    key: "number",
                    label: "数字",
                    type: new NumberType(0)
                }],
                transformMax: 5
            })
        }
    ],
    returns: new NumberType()
}
