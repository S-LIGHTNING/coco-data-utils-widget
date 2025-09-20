import { IndexType, processIndex } from "../../utils/index-tools"

export const methods: Record<string, Function> = {
    string__charCodeAt(string: string, indexType: IndexType, index: number): number {
        const processedIndex: number = processIndex(index, indexType, string.length)
        return string.charCodeAt(processedIndex)
    }
}
