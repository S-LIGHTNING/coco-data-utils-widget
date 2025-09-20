import { ArrayType, MethodTypes, StringType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "string__match",
    label: "字符串匹配",
    block: [
        {
            key: "string",
            label: "字符串",
            type: new StringType("字符串")
        }, "匹配", {
            key: "pattern",
            label: "模式",
            type: new StringType("^字.*串$")
        }, {
            key: "flags",
            label: "标记",
            type: new StringType("g")
        }
    ],
    returns: new ArrayType({
        itemType: new StringType()
    })
}
