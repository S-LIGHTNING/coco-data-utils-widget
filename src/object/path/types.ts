import { ArrayType, MethodBlock, NumberType, StringType, UnionType } from "slightning-coco-widget"

export type Path = string | (string | number)[]

export const PathType = new UnionType<Path>(
    new StringType("路径·1"),
    new ArrayType({
        itemType: new UnionType<string | number>(new StringType(), new NumberType())
    }
))

export const PathBlockTypes: MethodBlock = [
    "路径", {
        key: "path",
        label: "路径",
        type: PathType
    }
]
