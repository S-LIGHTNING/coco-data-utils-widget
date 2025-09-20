import _ from "lodash"

export const methods: Record<string, Function> = {
    array__flatten(array: unknown[]): unknown[] {
        return _.flattenDeep(array)
    }
}
