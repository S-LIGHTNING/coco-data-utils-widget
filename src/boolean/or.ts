export function orV2(booleans: { boolean: boolean }[]): boolean {
    return booleans.some(({ boolean }: { boolean: boolean }): boolean => boolean)
}

export function orV1(firstBoolean: boolean, booleans: { boolean: boolean }[]): boolean {
    if (firstBoolean) {
        return true
    }
    for (const { boolean } of booleans) {
        if (boolean) {
            return true
        }
    }
    return false
}
