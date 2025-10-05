import { getPathObject, processKey } from "../get/methods"
import { Path } from "../path"

export const methods: Record<string, Function> = {
    object__set(object: Record<string, unknown>, path: Path, value: unknown): void {
        const [resultObject, rawLastKey] = getPathObject(object, path)
        const lastKey = processKey(resultObject, rawLastKey)
        resultObject[lastKey] = value
    }
}
