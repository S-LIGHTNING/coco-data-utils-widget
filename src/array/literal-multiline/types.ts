import { AnyType, ArrayType, MethodBlockParam, MethodTypes, MutatorType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__literalMultiline",
    label: "列表字面多行",
    block: [
        "列表", {
            key: "items",
            label: "项",
            type: new MutatorType({
                block: [
                    MethodBlockParam.BREAK_LINE, {
                        key: "value",
                        label: "值",
                        type: new AnyType("项")
                    }
                ],
                min: 0,
                transformMin: 2,
                transformMax: 5
            })
        }
    ],
    returns: new ArrayType(),
    blockOptions: { inline: false }
}
