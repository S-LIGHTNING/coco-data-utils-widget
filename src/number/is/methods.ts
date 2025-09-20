import { TypeName } from "./types"

export const methods: Record<string, Function> = {
    number__is(number: number, name: TypeName): boolean {
        switch (name) {
            case "Integer":
                return Number.isInteger(number)
            case "NaN":
                return Number.isNaN(number)
            case "Finite":
                return Number.isFinite(number)
            case "SafeInteger":
                return Number.isSafeInteger(number)
        }
    }
}
