import { StringEnumType } from "slightning-coco-widget"

export type IndexType = "FromFirst" | "FromLast"

export const IndexType = new StringEnumType([
    ["正数", "FromFirst"],
    ["倒数", "FromLast"]
])
