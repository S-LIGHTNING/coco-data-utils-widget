export const methods: Record<string, Function> = {
    array__map(
        mapper: (item: unknown, index: number, array: unknown[]) => unknown | Promise<unknown>,
        array: unknown[]
    ): unknown[] | Promise<unknown[]> {
        const mappedPromiseArray: Promise<unknown>[] = []
        const result: unknown[] = []
        for (const i in array) {
            const mappedValue: unknown = mapper(array[i], Number(i) + 1, array)
            if (mappedValue instanceof Promise) {
                mappedPromiseArray[i] = mappedValue
            } else {
                result[i] = mappedValue
            }
        }
        if (mappedPromiseArray.length == 0) {
            return result
        }
        return (async (): Promise<unknown[]> => {
            for (const i in mappedPromiseArray) {
                result[i] = await mappedPromiseArray[i]
            }
            return result
        })()
    }
}
