import { ChangeType } from "./types"
import { Path } from "../path"
import { getPathObject, processKey } from "../get/methods"

export const methods: Record<string, Function> = {
    object__change(
        object: Record<string, unknown>,
        path: Path,
        type: ChangeType,
        value: number
    ): void {
        const [resultObject, rawLastKey] = getPathObject(object, path)
        const lastKey = processKey(resultObject, rawLastKey)
        switch (type) {
            case "Increase":
                resultObject[lastKey] = (resultObject[lastKey] as number) + value
                break
            case "Decrease":
                resultObject[lastKey] = (resultObject[lastKey] as number) - value
                break
        }
    }
}
