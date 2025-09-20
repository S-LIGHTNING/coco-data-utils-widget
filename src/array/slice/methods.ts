import { IndexType, processIndex } from "../../utils/index-tools"

export const methods: Record<string, Function> = {
    array__slice(
        array: unknown[],
        startIndexType: IndexType, startIndex: number,
        endIndexType: IndexType, endIndex: number
    ): unknown[] {
        return array.slice(
            processIndex(startIndex, startIndexType, array.length),
            processIndex(endIndex, endIndexType, array.length) + 1
        )
    }
}
