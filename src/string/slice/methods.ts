import { IndexType, processIndex } from "../../utils/index-tools"

export const methods: Record<string, Function> = {
    string__slice(
        string: string,
        startIndexType: IndexType, startIndex: number,
        endIndexType: IndexType, endIndex: number
    ): string {
        return string.slice(
            processIndex(startIndex, startIndexType, string.length),
            processIndex(endIndex, endIndexType, string.length) + 1
        )
    }
}
