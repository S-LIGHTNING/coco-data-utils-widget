import { getPath } from "../get/methods"
import { Path } from "../path"

export const methods: Record<string, Function> = {
    object__optionalGet(object: Record<string, unknown>, path: Path): unknown {
        try {
            return getPath(object, path)
        } catch (error) {
            return undefined
        }
    }
}
