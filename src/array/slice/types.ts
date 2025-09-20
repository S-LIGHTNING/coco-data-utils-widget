import { ArrayType, IntegerType, MethodTypes } from "slightning-coco-widget"
import { IndexType } from "../../utils/index-tools"

export const types: MethodTypes = {
    key: "array__slice",
    label: "列表截取",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
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
        }, "项"
    ],
    returns: new ArrayType()
}
