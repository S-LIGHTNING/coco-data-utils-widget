import { MethodTypes, MutatorType, NumberType } from "slightning-coco-widget"
import { minAndMax, TypeType } from "./min-and-max"

export const types: MethodTypes = {
    key: "number__minAndMaxMultiline",
    label: "",
    block: [
        {
            key: "type",
            label: "",
            type: TypeType
        }, {
            key: "numbers",
            label: "数字",
            type: new MutatorType({
                block: [{
                    key: "number",
                    label: "",
                    type: new NumberType(0)
                }],
                transformMax: 5
            })
        }
    ],
    returns: new NumberType(),
    blockOptions: {
        inline: false
    }
}

export const methods: Record<string, Function> = {
    number__minAndMaxMultiline: minAndMax
}
