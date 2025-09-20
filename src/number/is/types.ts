import { BooleanType, MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

export type TypeName =
    "Integer" |
    "NaN" |
    "Finite" |
    "SafeInteger"

export const types: MethodTypes = {
    key: "number__is",
    label: "数字是",
    block: [
        {
            key: "number",
            label: "数子",
            type: new NumberType(0)
        }, "是", {
            key: "type",
            label: "类型",
            type: new StringEnumType<TypeName>([
                ["整数", "Integer"],
                ["非数字", "NaN"],
                ["有限的", "Finite"],
                ["安全整数", "SafeInteger"]
            ])
        }
    ],
    returns: new BooleanType()
}
