import { mergeSort } from "../sort-with"
import { greaterThan, lessThan, SortOrder } from "../sort"

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
