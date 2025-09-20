import { IntegerType, MethodTypes, StringType } from "slightning-coco-widget"
import { IndexType } from "../../utils/index-tools"

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
