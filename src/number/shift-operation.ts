import { MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

export type OperationName =
    "LeftShift" |
    "RightShift" |
    "UnsignedRightShift"

export const types: MethodTypes = {
    key: "number__shiftOperation",
    label: "数字移位运算",
    block: [
        {
            key: "x",
            label: "X",
            type: new NumberType(0)
        }, {
            key: "operationName",
            label: "操作名称",
            type: new StringEnumType<OperationName>([
                ["<<", "LeftShift"],
                [">>", "RightShift"],
                [">>>", "UnsignedRightShift"]
            ])
        }, {
            key: "y",
            label: "Y",
            type: new NumberType(0)
        }
    ],
    returns: new NumberType()
}

export const methods: Record<string, Function> = {
    number__shiftOperation(x: number, operationName: OperationName, y: number): number {
        switch (operationName) {
            case "LeftShift":
                return x << y
            case "RightShift":
                return x >> y
            case "UnsignedRightShift":
                return x >>> y
        }
    }
}
