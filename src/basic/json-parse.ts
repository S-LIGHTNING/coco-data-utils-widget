import { AnyType, MethodTypes, StringType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "basic__JSONParse",
    label: "基础 JSON 解析",
    block: [
        "JSON", "解析", {
            key: "JSONString",
            label: "JSON 字符串",
            type: new StringType("[\"JSON 字符串\"]")
        }
    ],
    returns: new AnyType()
}

export const methods: Record<string, Function> = {
    basic__JSONParse(JSONString: string): unknown {
        return JSON.parse(JSONString)
    }
}
