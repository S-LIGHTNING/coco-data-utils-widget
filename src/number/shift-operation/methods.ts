import { OperationName } from "./types"

export const methods: Record<string, Function> = {
    number__shiftOperation(x: number, operationName: OperationName, y: number): number {
        switch (operationName) {
            case "LeftShift":
                return x << y
            case "RightShift":
                return x >> y
            case "UnsignedRightShift":
                return x >>> y
        }
    }
}
