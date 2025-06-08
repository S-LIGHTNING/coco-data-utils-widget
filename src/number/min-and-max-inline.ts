import { MethodTypes, MutatorType, NumberType } from "slightning-coco-widget"
import { minAndMax, TypeType } from "./min-and-max"

export const types: MethodTypes = {
    key: "number__minAndMaxInline",
    label: "数字最小和最大",
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

export const methods: Record<string, Function> = {
    number__minAndMaxInline: minAndMax
}
