import structuredClonePolyfill from "@ungap/structured-clone"

import { AnyType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "basic__copy",
    label: "基础复制",
    block: [
        "复制", {
            key: "data",
            label: "数据",
            type: new AnyType("数据")
        }
    ],
    returns: new AnyType()
}

export const methods: Record<string, Function> = {
    basic__copy(data: unknown): unknown {
        return (global.structuredClone ?? structuredClonePolyfill)(data)
    }
}
