import { IntegerType, MethodTypes, StringType } from "slightning-coco-widget"
import { IndexType, processIndex } from "../index-tools"

export const types: MethodTypes = {
    key: "string__slice",
    label: "字符串截取",
    block: [
        {
            key: "string",
            label: "字符串",
            type: new StringType("字符串")
        }, {
            key: "startIndexType",
            label: "起始位置",
            type: IndexType
        }, "第", {
            key: "startIndex",
            label: "索引",
            type: new IntegerType(1)
        }, "到", {
            key: "endIndexType",
            label: "结束位置",
            type: IndexType
        }, "第", {
            key: "endIndex",
            label: "索引",
            type: new IntegerType(1)
        }, "个字符"
    ],
    returns: new StringType()
}

export const methods: Record<string, Function> = {
    string__slice(
        string: string,
        startIndexType: IndexType, startIndex: number,
        endIndexType: IndexType, endIndex: number
    ): string {
        return string.slice(
            processIndex(startIndex, startIndexType, string.length),
            processIndex(endIndex, endIndexType, string.length) + 1
        )
    }
}
