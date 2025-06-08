import { AnyType, ArrayType, IntegerType, MethodTypes } from "slightning-coco-widget"
import { IndexType, processIndex } from "../index-tools"

export const types: MethodTypes = {
    key: "array__slice",
    label: "列表截取",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                itemType: new AnyType(),
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

export const methods: Record<string, Function> = {
    array__slice(
        array: unknown[],
        startIndexType: IndexType, startIndex: number,
        endIndexType: IndexType, endIndex: number
    ): unknown[] {
        return array.slice(
            processIndex(startIndex, startIndexType, array.length),
            processIndex(endIndex, endIndexType, array.length) + 1
        )
    }
}
