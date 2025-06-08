import { MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

export type OperationName = "Not"

export const types: MethodTypes = {
    key: "number__UnaryBitwiseOperation",
    label: "数字一元位运算",
    block: [
        {
            key: "operationName",
            label: "操作名称",
            type: new StringEnumType<OperationName>([
                ["~", "Not"]
            ])
        }, {
            key: "x",
            label: "X",
            type: new NumberType(0)
        }
    ],
    returns: new NumberType()
}

export const methods: Record<string, Function> = {
    number__UnaryBitwiseOperation(operationName: OperationName, x: number): number {
        switch (operationName) {
            case "Not":
                return ~x
        }
    }
}
