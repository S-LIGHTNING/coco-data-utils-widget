import { ObjectArrayType } from "./types"

export const methods: Record<string, Function> = {
    object__array(object: Record<string, unknown>, type: ObjectArrayType): unknown[] {
        switch (type) {
            case "Keys":
                return Object.keys(object)
            case "Values":
                return Object.values(object)
            case "Entries":
                return Object.entries(object)
            default:
                return []
        }
    }
}
