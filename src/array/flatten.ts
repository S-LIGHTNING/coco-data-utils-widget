import _ from "lodash"

import { ArrayType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__flatten",
    label: "列表拉平",
    block: [
        "拉平", {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }
    ],
    returns: new ArrayType(),
    tooltip: "将嵌套的列表拉平成一个一维列表。"
}

export const methods: Record<string, Function> = {
    array__flatten(array: unknown[]): unknown[] {
        return _.flattenDeep(array)
    }
}
