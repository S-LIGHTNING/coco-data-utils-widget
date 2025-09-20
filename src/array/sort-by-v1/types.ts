import { AnyType, ArrayType, FunctionType, MethodTypes } from "slightning-coco-widget"
import { SortOrderType } from "../sort"

export const types: MethodTypes = {
    key: "array__sortBy_v1",
    label: "列表按属性排序",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }, "按", {
            key: "property",
            label: "属性",
            type: new FunctionType({
                block: [
                    {
                        key: "item",
                        label: "项",
                        type: new AnyType()
                    }
                ],
                returns: new AnyType("属性")
            })
        }, {
            key: "order",
            label: "顺序",
            type: SortOrderType
        }, "排列"
    ],
    tooltip: "按照自定义的顺序重新排列列表中的元素。与 列表排序 方法不同的是，该方法接收一个自定义属性来定制比较依据。"
}
