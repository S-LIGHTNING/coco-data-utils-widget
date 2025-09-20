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
