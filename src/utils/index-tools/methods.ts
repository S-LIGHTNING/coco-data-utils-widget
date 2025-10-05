import { IndexType } from "./types"

export function processIndex(index: number, indexType: IndexType, length: number): number {
    switch (indexType) {
        case "FromFirst":
            return index - 1
        case "FromLast":
            return length - index
    }
}
