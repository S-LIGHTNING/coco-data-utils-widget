import { getPath } from "../get/methods"
import { Path } from "../path"

export const methods: Record<string, Function> = {
    object__has(object: Record<string, unknown>, path: Path): boolean {
        try {
            getPath(object, path)
        } catch (error) {
            return false
        }
        return true
    }
}
