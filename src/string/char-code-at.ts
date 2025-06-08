import { IntegerType, MethodTypes, StringType } from "slightning-coco-widget"
import { IndexType, processIndex } from "../index-tools"

export const types: MethodTypes = {
    key: "string__charCodeAt",
    label: "字符串字符编码",
    block: [
        {
            key: "string",
            label: "字符串",
            type: new StringType("字符串")
        }, {
            key: "indexType",
            label: "索引类型",
            type: IndexType
        }, "第", {
            key: "index",
            label: "索引",
            type: new IntegerType(1)
        }, "个字符的编码"
    ],
    returns: new IntegerType(),
    tooltip: "获取字符串中指定位置的字符的 Unicode 编码值。"
}

export const methods: Record<string, Function> = {
    string__charCodeAt(string: string, indexType: IndexType, index: number): number {
        const processedIndex: number = processIndex(index, indexType, string.length)
        return string.charCodeAt(processedIndex)
    }
}
