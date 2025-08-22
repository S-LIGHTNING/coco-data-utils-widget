import { ArrayType, MethodTypes, StringEnumType } from "slightning-coco-widget"
import { mergeSort } from "./sort-with"

export type SortOrder = "Ascending" | "Descending"
export const SortOrderType = new StringEnumType<SortOrder>([
    ["升序", "Ascending"],
    ["降序", "Descending"]
])

export const types: MethodTypes = {
    key: "array__sort",
    label: "列表排序",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }, "按", {
            key: "order",
            label: "顺序",
            type: SortOrderType
        }, "排列"
    ],
    tooltip: "按照一定的顺序重新排列列表中的元素，仅重新排列数字，其他类型的数据位置保持不动。"
}

export function lessThan(x: unknown, y: unknown): boolean {
    if (typeof x == "number" && typeof y == "number") {
        return x < y
    }
    return false
}

export function greaterThan(x: unknown, y: unknown): boolean {
    if (typeof x == "number" && typeof y == "number") {
        return x > y
    }
    return false
}

export const methods: Record<string, Function> = {
    array__sort(
        array: unknown[],
        order: SortOrder
    ): Promise<void> {
        switch(order) {
            case "Ascending":
                return mergeSort(array, 0, array.length, lessThan)
            case "Descending":
                return mergeSort(array, 0, array.length, greaterThan)
        }
    }
}
