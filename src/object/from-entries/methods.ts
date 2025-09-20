export const methods: Record<string, Function> = {
    object__fromEntries(entries: unknown[][]): Record<string, unknown> {
        const result: Record<string, unknown> = {}
        for (const entry of entries) {
            if (entry.length != 2) {
                throw new Error("键值对项必须是长度为 2 的列表")
            }
            const [key, value] = entry
            if (typeof key != "string") {
                throw new Error("字典的键必须是字符串")
            }
            result[key] = value
        }
        return result
    }
}
