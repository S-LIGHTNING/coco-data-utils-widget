import { BooleanType, MethodTypes, StringType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "string__test",
    label: "字符串测试",
    block: [
        {
            key: "string",
            label: "字符串",
            type: new StringType("字符串")
        }, "满足", {
            key: "pattern",
            label: "模式",
            type: new StringType("^字.*串$")
        }
    ],
    returns: new BooleanType()
}

export const methods: Record<string, Function> = {
    string__test(string: string, pattern: string): boolean {
        return new RegExp(pattern).test(string)
    }
}
