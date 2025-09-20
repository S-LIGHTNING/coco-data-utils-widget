import { Path, processPath } from "../path"

export const methods: Record<string, Function> = {
    object__set(object: Record<string, unknown>, path: Path, value: unknown): void {
        const keys: string[] = processPath(path)
        const lastKey: string | undefined = keys.pop()
        if (lastKey == undefined) {
            return
        }
        let current: unknown = object
        for (const key of keys) {
            if (current == null || typeof current != "object") {
                throw new Error("路径不存在")
            }
            current = (current as Record<string, unknown>)[key]
        }
        if (current == null || typeof current != "object") {
            throw new Error("路径不存在")
        }
        (current as Record<string, unknown>)[lastKey] = value
    }
}
