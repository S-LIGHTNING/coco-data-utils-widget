import { MethodTypes, StringType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "string__regExpReplace",
    label: "字符串正则替换",
    block: [
        {
            key: "string",
            label: "字符串",
            type: new StringType("字符串")
        }, "正则替换", {
            key: "pattern",
            label: "模式",
            type: new StringType("^字.*串$")
        }, {
            key: "flags",
            label: "标记",
            type: new StringType("g")
        }, "为", {
            key: "replace",
            label: "替换",
            type: new StringType("字")
        }
    ],
    returns: new StringType()
}
