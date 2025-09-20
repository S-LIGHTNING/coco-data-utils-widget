import { OperationName } from "./types"

export const methods: Record<string, Function> = {
    number__UnaryBitwiseOperation(operationName: OperationName, x: number): number {
        switch (operationName) {
            case "Not":
                return ~x
        }
    }
}
