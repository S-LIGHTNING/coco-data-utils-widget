import { OperationName } from "./types"

export const methods: Record<string, Function> = {
    number__binaryBitwiseOperation(x: number, operationName: OperationName, y: number): number {
        switch (operationName) {
            case "And":
                return x & y
            case "Or":
                return x | y
            case "Xor":
                return x ^ y
        }
    }
}
