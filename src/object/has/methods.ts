import { Path, processPath } from "../path"

export const methods: Record<string, Function> = {
    object__has(object: Record<string, unknown>, path: Path): boolean {
        const keys: string[] = processPath(path)
        let current: unknown = object
        for (const key of keys) {
            if (current == null || typeof current != "object") {
                return false
            }
            if (!(key in current)) {
                return false
            }
            current = (current as Record<string, unknown>)[key]
        }
        return true
    }
}
