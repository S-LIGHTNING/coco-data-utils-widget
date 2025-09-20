import { AnyType, ArrayType, IntegerType, MethodTypes } from "slightning-coco-widget"
import { IndexType } from "../../utils/index-tools"

export const types: MethodTypes = {
    key: "array__item",
    label: "列表项",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }, {
            key: "indexType",
            label: "索引类型",
            type: IndexType
        }, "第", {
            key: "index",
            label: "索引",
            type: new IntegerType(1)
        }, "项"
    ],
    returns: new AnyType()
}
