import { MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

export type SpacialNumberName =
    "NaN" |
    "Infinity" |
    "MAX_SAFE_INTEGER" |
    "MIN_SAFE_INTEGER" |
    "MAX_VALUE" |
    "MIN_VALUE"

export const types: MethodTypes = {
    key: "number__spacial",
    label: "数字特殊",
    block: [
        {
            key: "name",
            label: "名称",
            type: new StringEnumType<SpacialNumberName>([
                ["非数字", "NaN"],
                ["无穷大", "Infinity"],
                ["最大安全整数", "MAX_SAFE_INTEGER"],
                ["最小安全整数", "MIN_SAFE_INTEGER"],
                ["最大数", "MAX_VALUE"],
                ["最小数", "MIN_VALUE"]
            ])
        }
    ],
    returns: new NumberType()
}
