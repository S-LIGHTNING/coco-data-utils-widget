import { AnyType, ArrayType, MethodTypes, StringEnumType } from "slightning-coco-widget"
import { mergeSort } from "./sort-with"

export type SortOrder = "Ascending" | "Descending"

export const types: MethodTypes = {
    key: "array__sort",
    label: "列表排序",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                itemType: new AnyType(),
                defaultValue: ["列表"]
            })
        }, "按", {
            key: "order",
            label: "顺序",
            type: new StringEnumType<SortOrder>([
                ["升序", "Ascending"],
                ["降序", "Descending"]
            ])
        }, "排列"
    ],
    tooltip: "按照一定的顺序重新排列列表中的元素。"
}

function lessThan(x: unknown, y: unknown): boolean {
    if (typeof x == "number" && typeof y == "number") {
        return x < y
    }
    return false
}

function greaterThan(x: unknown, y: unknown): boolean {
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
