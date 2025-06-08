export function literal(entries: { key: unknown, value: unknown }[]): Record<string, unknown> {
    const result: Record<string, unknown> = {}
    for (const { key, value } of entries) {
        if (typeof key == "string") {
            result[key] = value
        }
    }
    return result
}
