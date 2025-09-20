export const methods: Record<string, Function> = {
    array__findIndex(
        array: unknown[],
        condition: (item: unknown, index: number, array: unknown[]) => boolean | Promise<boolean>
    ): number | Promise<number> {
        const conditionResultArray: Promise<boolean>[] = []
        for (const i in array) {
            const conditionResult: boolean | Promise<boolean> = condition(array[i], Number(i) + 1, array)
            if (typeof conditionResult == "boolean") {
                if (conditionResult) {
                    return Number(i) + 1
                }
            } else {
                conditionResultArray[i] = conditionResult
            }
        }
        if (conditionResultArray.length == 0) {
            return 0
        }
        return (async (): Promise<number> => {
            for (const i in conditionResultArray) {
                if (await conditionResultArray[i]) {
                    return Number(i) + 1
                }
            }
            return 0
        })()
    }
}
