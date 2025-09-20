import { Path, processPath } from "../path"

export const methods: Record<string, Function> = {
    object__get(object: Record<string, unknown>, path: Path): unknown {
        const keys: string[] = processPath(path)
        let current: unknown = object
        for (const key of keys) {
            if (current == null || typeof current != "object") {
                throw new Error("路径不存在")
            }
            current = (current as Record<string, unknown>)[key]
            if (current == undefined) {
                throw new Error("路径不存在")
            }
        }
        return current
    }
}
