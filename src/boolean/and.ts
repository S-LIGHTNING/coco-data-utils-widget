export function andV2(booleans: { boolean: boolean }[]): boolean {
    return booleans.every(({ boolean }: { boolean: boolean }): boolean => boolean)
}

export function andV1(firstBoolean: boolean, booleans: { boolean: boolean }[]): boolean {
    if (!firstBoolean) {
        return false
    }
    for (const { boolean } of booleans) {
        if (!boolean) {
            return false
        }
    }
    return true
}
