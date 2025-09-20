import { ArrayType, MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

export type Type =
    "Min" |
    "Max"

export const types: MethodTypes = {
    key: "number__arrayMinAndMax",
    label: "数字列表最小和最大",
    block: [
        {
            key: "type",
            label: "类型",
            type: new StringEnumType<Type>([
                ["最小值", "Min"],
                ["最大值", "Max"]
            ])
        }, {
            key: "numbers",
            label: "数字",
            type: new ArrayType({
                itemType: new NumberType(0),
                defaultValue: [0, 1, 2, 3]
            })
        }
    ],
    returns: new NumberType()
}
