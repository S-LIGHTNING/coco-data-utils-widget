import { ArrayType, MethodTypes, StringType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__join",
    label: "列表连接",
    block: [
        "用", {
            key: "separator",
            label: "分隔符",
            type: new StringType(",")
        }, "连接", {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }
    ],
    returns: new StringType()
}

export const methods: Record<string, Function> = {
    array__join(separator: string, array: unknown[]): string {
        return array.join(separator)
    }
}
