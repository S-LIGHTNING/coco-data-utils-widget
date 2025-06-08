import { MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

export type OperationName =
    "And" |
    "Or" |
    "Xor"

export const types: MethodTypes = {
    key: "number__binaryBitwiseOperation",
    label: "数字二元位运算",
    block: [
        {
            key: "x",
            label: "X",
            type: new NumberType(0)
        }, {
            key: "operationName",
            label: "操作名称",
            type: new StringEnumType<OperationName>([
                ["&", "And"],
                ["|", "Or"],
                ["^", "Xor"]
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
    number__binaryBitwiseOperation(x: number, operationName: OperationName, y: number): number {
        switch (operationName) {
            case "And":
                return x & y
            case "Or":
                return x | y
            case "Xor":
                return x ^ y
        }
    }
}
