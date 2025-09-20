export async function deepEqualWith(
    x: unknown,
    y: unknown,
    comparer: (x: unknown, y: unknown) => boolean | Promise<boolean>
): Promise<boolean> {
    if (await comparer(x, y)) {
        return true
    }
    if (
        (x != null && typeof x == "object") &&
        (y != null && typeof y == "object")
    ) {
        const keys: string[] = []
        const equalResultArray: Promise<boolean>[] = []
        for (const key in x) {
            if (!(key in y)) {
                return false
            }
            keys.push(key)
        }
        for (const key in y) {
            if (!(key in x)) {
                return false
            }
        }
        for (const key of keys) {
            equalResultArray.push(deepEqualWith(x[key as keyof typeof x], y[key as keyof typeof y], comparer))
        }
        return new Promise((resolve: (value: boolean) => void): void => {
            Promise.all(
                equalResultArray.map(async (value: Promise<boolean>): Promise<void> => {
                    if (!await value) {
                        resolve(false)
                    }
                }
            )).then((): void => {
                resolve(true)
            })
        })
    }
    return false
}

export const methods: Record<string, Function> = {
    async basic__deepEqualWith(
        x: unknown,
        type: "Equal" | "NotEqual",
        y: unknown,
        comparer: (x: unknown, y: unknown) => boolean
    ): Promise<boolean> {
        switch (type) {
            case "Equal":
                return deepEqualWith(x, y, comparer)
            case "NotEqual":
                return !await deepEqualWith(x, y, comparer)
        }
    }
}
