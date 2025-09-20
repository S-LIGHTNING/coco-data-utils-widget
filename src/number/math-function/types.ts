import { MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

export type FunctionName =
    "sin" |
    "cos" |
    "tan" |
    "asin" |
    "acos" |
    "atan" |
    "sinh" |
    "cosh" |
    "tanh" |
    "asinh" |
    "acosh" |
    "atanh"

export const types: MethodTypes = {
    key: "number__mathFunction",
    label: "数字函数",
    block: [
        {
            key: "functionName",
            label: "函数名称",
            type: new StringEnumType<FunctionName>([
                "sin", "cos", "tan",
                "asin", "acos", "atan",
                "sinh", "cosh", "tanh",
                "asinh", "acosh", "atanh"
            ])
        }, {
            key: "x",
            label: "X",
            type: new NumberType(0)
        }
    ],
    returns: new NumberType()
}
