export const methods: Record<string, Function> = {
    array__every(
        array: unknown[],
        condition: (item: unknown, index: number, array: unknown[]) => boolean | Promise<boolean>
    ): boolean | Promise<boolean> {
        const conditionResultArray: Promise<boolean>[] = []
        for (const i in array) {
            const conditionResult: boolean | Promise<boolean> = condition(array[i], Number(i) + 1, array)
            if (typeof conditionResult == "boolean") {
                if (!conditionResult) {
                    return false
                }
            } else {
                conditionResultArray.push(conditionResult)
            }
        }
        if (conditionResultArray.length == 0) {
            return true
        }
        return new Promise((resolve: (value: boolean) => void): void => {
            Promise.all(conditionResultArray.map(
                async (conditionResult: Promise<boolean>): Promise<void> => {
                    const value: boolean = await conditionResult
                    if (!value) {
                        resolve(false)
                    }
                }
            )).then((): void => {
                resolve(true)
            })
        })
    }
}
