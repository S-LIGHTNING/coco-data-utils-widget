export const methods: Record<string, Function> = {
    async array__filter(
        condition: (item: unknown, index: number, array: unknown[]) => boolean | Promise<boolean>,
        array: unknown[]
    ): Promise<unknown[]> {
        const conditionResultArray: (boolean | Promise<boolean>)[] = []
        for (const i in array) {
            conditionResultArray[i] = condition(array[i], Number(i) + 1, array)
        }
        const result: unknown[] = []
        for (const i in array) {
            const conditionResult: boolean | undefined = await conditionResultArray[i]
            if (conditionResult) {
                result.push(array[i])
            }
        }
        return result
    }
}
