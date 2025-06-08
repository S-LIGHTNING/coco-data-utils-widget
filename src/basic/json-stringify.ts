import { AnyType, MethodTypes, StringType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "basic__JSONStringify",
    label: "基础 JSON 字符化",
    block: [
        "JSON", "字符化", {
            key: "data",
            label: "数据",
            type: new AnyType("数据")
        }
    ],
    returns: new StringType()
}

export const methods: Record<string, Function> = {
    basic__JSONStringify(data: unknown): unknown {
        return JSON.stringify(data)
    }
}
