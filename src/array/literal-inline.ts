import { AnyType, ArrayType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { literal } from "./literal"

export const types: MethodTypes = {
    key: "array__literalInline",
    label: "列表单行字面",
    block: [
        "列表", {
            key: "items",
            label: "项",
            type: new MutatorType({
                block: [{
                    key: "value",
                    label: "值",
                    type: new AnyType("项")
                }],
                min: 0
            })
        }
    ],
    returns: new ArrayType()
}

export const methods: Record<string, Function> = {
    array__literalInline: literal
}
