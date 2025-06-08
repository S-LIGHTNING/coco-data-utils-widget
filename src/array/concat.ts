export function concat(arrays: { array: unknown[] }[]): unknown[] {
    let result: unknown[] = []
    for (const { array } of arrays) {
        result = result.concat(array)
    }
    return result
}
