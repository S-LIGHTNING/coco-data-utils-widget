import { IndexType, processIndex } from "../../utils/index-tools"

export const methods: Record<string, Function> = {
    array__item(array: unknown[], indexType: IndexType, index: number): unknown {
        return array[processIndex(index, indexType, array.length)]
    }
}
