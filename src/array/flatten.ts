import { AnyType, ArrayType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__flatten",
    label: "列表拉平",
    block: [
        "拉平", {
            key: "array",
            label: "列表",
            type: new ArrayType({
                itemType: new AnyType(),
                defaultValue: ["列表"]
            })
        }
    ],
    returns: new ArrayType(),
    tooltip: "将嵌套的列表拉平成一个一维列表。"
}

export function flatten(array: unknown[]): unknown[] {
    const result: unknown[] = []
    for (const item of array) {
        if (Array.isArray(item)) {
            result.push(...flatten(item))
        } else {
            result.push(item)
        }
    }
    return result
}

export const methods: Record<string, Function> = {
    array__flatten(array: unknown[]): unknown[] {
        return flatten(array)
    }
}
