export function and(firstBoolean: boolean, booleans: { boolean: boolean }[]): boolean {
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
