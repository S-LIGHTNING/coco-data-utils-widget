import { ArrayType, MethodBlock, StringType, UnionType } from "slightning-coco-widget"

export type Path = string | string[]

export const PathType = new UnionType<Path>(
    new StringType("字典.路径"),
    new ArrayType({
        itemType: new StringType()
    }
))

export const PathBlockTypes: MethodBlock = [
    "路径", {
        key: "path",
        label: "路径",
        type: PathType
    }
]

export function processPath(path: string | string[]): string[] {
    if (typeof path == "string") {
        return path.split(".")
    } else {
        return path
    }
}
