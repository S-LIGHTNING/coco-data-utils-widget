export function or(firstBoolean: boolean, booleans: { boolean: boolean }[]): boolean {
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
