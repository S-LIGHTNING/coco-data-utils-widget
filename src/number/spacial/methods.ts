import { SpacialNumberName } from "./types"

export const methods: Record<string, Function> = {
    number__spacial(name: SpacialNumberName): number {
        switch (name) {
            case "NaN":
                return NaN
            case "Infinity":
                return Infinity
            case "MAX_SAFE_INTEGER":
                return Number.MAX_SAFE_INTEGER
            case "MIN_SAFE_INTEGER":
                return Number.MIN_SAFE_INTEGER
            case "MAX_VALUE":
                return Number.MAX_VALUE
            case "MIN_VALUE":
                return Number.MIN_VALUE
        }
    }
}
