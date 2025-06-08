import { MethodTypes, NumberType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "number__atan2",
    label: "数字反正切2",
    block: [
        "atan2", {
            key: "y",
            label: "Y",
            type: new NumberType(0)
        }, {
            key: "x",
            label: "X",
            type: new NumberType(0)
        }
    ],
    returns: new NumberType()
}

export const methods: Record<string, Function> = {
    number__atan2(y: number, x: number): number {
        return Math.atan2(y, x)
    }
}
