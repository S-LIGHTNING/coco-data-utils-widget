import { AnyType, ArrayType, IntegerType, MethodTypes } from "slightning-coco-widget"
import { IndexType, processIndex } from "../index-tools"

export const types: MethodTypes = {
    key: "array__item",
    label: "列表项",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                itemType: new AnyType(),
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

export const methods: Record<string, Function> = {
    array__item(array: unknown[], indexType: IndexType, index: number): unknown {
        return array[processIndex(index, indexType, array.length)]
    }
}
