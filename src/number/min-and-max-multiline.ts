import { MethodBlockParam, MethodTypes, MutatorType, NumberType } from "slightning-coco-widget"
import { minAndMax, TypeType } from "./min-and-max"

export const types: MethodTypes = {
    key: "number__minAndMaxMultiline",
    label: "数字最小和最大多行",
    block: [
        {
            key: "type",
            label: "类型",
            type: TypeType
        }, {
            key: "numbers",
            label: "数字",
            type: new MutatorType({
                block: [
                    MethodBlockParam.BREAK_LINE, {
                        key: "number",
                        label: "数字",
                        type: new NumberType(0)
                    }
                ],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new NumberType(),
    blockOptions: { inline: false }
}

export const methods: Record<string, Function> = {
    number__minAndMaxMultiline: minAndMax
}
