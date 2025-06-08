import { MethodTypes, NumberType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "number__literal",
    label: "数字字面",
    block: [
        {
            key: "value",
            label: "值",
            type: new NumberType(0)
        }
    ],
    returns: new NumberType()
}

export const methods: Record<string, Function> = {
    number__literal(value: number): number {
        return value
    }
}
