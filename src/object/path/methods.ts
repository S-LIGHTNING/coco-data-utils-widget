import { Path } from "./types"

export function processPath(path: Path): (string | number)[] {
    if (typeof path == "string") {
        return path.split(/\.|·/)
    } else {
        return path
    }
}
