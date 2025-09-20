import { FunctionName } from "./types"

export const methods: Record<string, Function> = {
    number__mathFunction(functionName: FunctionName, x: number): number {
        return Math[functionName](x)
    }
}
