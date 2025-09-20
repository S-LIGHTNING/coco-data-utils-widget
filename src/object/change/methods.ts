import { ChangeType } from "./types"
import { Path, processPath } from "../path"

export const methods: Record<string, Function> = {
    object__change(
        object: Record<string, unknown>,
        path: Path,
        type: ChangeType,
        value: number
    ): void {
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
        const currentValue = (current as Record<string, unknown>)[lastKey]
        switch (type) {
            case "Increase":
                (current as Record<string, unknown>)[lastKey] = (currentValue as number) + value
                break
            case "Decrease":
                (current as Record<string, unknown>)[lastKey] = (currentValue as number) - value
                break
        }
    }
}
