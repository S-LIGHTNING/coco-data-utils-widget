import { Path, processPath } from "../path"

export const methods: Record<string, Function> = {
    object__optionalGet(object: Record<string, unknown>, path: Path): unknown {
        const keys: string[] = processPath(path)
        let current: unknown = object
        for (const key of keys) {
            if (current == null || typeof current != "object") {
                return undefined
            }
            current = (current as Record<string, unknown>)[key]
            if (current == undefined) {
                return undefined
            }
        }
        return current
    }
}
