export function processPath(path: string | string[]): string[] {
    if (typeof path == "string") {
        return path.split(".")
    } else {
        return path
    }
}
