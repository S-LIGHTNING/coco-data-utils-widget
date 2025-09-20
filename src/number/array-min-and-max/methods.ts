import { Type } from "./types"

export const methods: Record<string, Function> = {
    number__arrayMinAndMax(type: Type, numbers: number[]): number {
        switch (type) {
            case "Min":
                return Math.min(...numbers)
            case "Max":
                return Math.max(...numbers)
        }
    }
}
