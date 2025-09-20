import { StringEnumType } from "slightning-coco-widget"

export type IndexType = "FromFirst" | "FromLast"

export const IndexType = new StringEnumType([
    ["正数", "FromFirst"],
    ["倒数", "FromLast"]
])

export function processIndex(index: number, indexType: IndexType, length: number): number {
    switch (indexType) {
        case "FromFirst":
            return index - 1
        case "FromLast":
            return length - index
    }
}
