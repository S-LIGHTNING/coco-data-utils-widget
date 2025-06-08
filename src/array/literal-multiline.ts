import { AnyType, ArrayType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { literal } from "./literal"

export const types: MethodTypes = {
    key: "array__literalMultiline",
    label: "列表",
    block: [
        {
            key: "items",
            label: "项",
            type: new MutatorType({
                block: [{
                    key: "value",
                    label: "",
                    type: new AnyType("项")
                }],
                transformMax: 5
            })
        }
    ],
    returns: new ArrayType(),
    blockOptions: {
        inline: false
    }
}

export const methods: Record<string, Function> = {
    array__literalMultiline: literal
}
