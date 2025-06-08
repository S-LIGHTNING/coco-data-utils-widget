import { MethodTypes, StringType } from "slightning-coco-widget"

import replaceString from "replace-string"

export const types: MethodTypes = {
    key: "string__replaceAll",
    label: "字符串替换全部",
    block: [
        "替换", {
            key: "string",
            label: "字符串",
            type: new StringType("字符串")
        }, "中的所有", {
            key: "search",
            label: "查找值",
            type: new StringType("字符")
        }, "为", {
            key: "replace",
            label: "替换值",
            type: new StringType("字")
        }
    ],
    returns: new StringType()
}

export const methods: Record<string, Function> = {
    string__replaceAll(string: string, search: string, replace: string): string {
        if (string.replaceAll != undefined) {
            return string.replaceAll(search, replace)
        } else {
            return replaceString(string, search, replace)
        }
    }
}
