import { AnyType, ArrayType, FunctionType, MethodTypes } from "slightning-coco-widget"
import { mergeSort } from "./sort-with"
import { greaterThan, lessThan, SortOrder, SortOrderType } from "./sort"

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

export const methods: Record<string, Function> = {
    array__sortBy_v1(
        array: unknown[],
        property: (item: unknown) => unknown | Promise<unknown>,
        order: SortOrder
    ): Promise<void> {
        let comparer: (x: unknown, y: unknown) => boolean
        switch (order) {
            case "Ascending":
                comparer = lessThan
                break
            case "Descending":
                comparer = greaterThan
                break
        }
        return mergeSort(array, 0, array.length, (x: unknown, y: unknown): boolean | Promise<boolean> => {
            let xProperty: unknown = property(x), yProperty: unknown = property(y)
            if (xProperty instanceof Promise || yProperty instanceof Promise) {
                return (async (): Promise<boolean> => comparer(await xProperty, await yProperty))()
            }
            return comparer(xProperty, yProperty)
        })
    }
}
