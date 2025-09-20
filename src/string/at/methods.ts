import { IndexType, processIndex } from "../../utils/index-tools"

export const methods: Record<string, Function> = {
    string__at(string: string, indexType: IndexType, index: number): string {
        const result: string | undefined = string[processIndex(index, indexType, string.length)]
        if (result == undefined) {
            throw new Error("不存在")
        }
        return result
    }
}
