import { SortOrder } from "./types"
import { mergeSort } from "../sort-with"

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
