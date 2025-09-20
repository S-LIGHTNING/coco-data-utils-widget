import { Type } from "./types"

export const methods: Record<string, Function> = {
    basic__nullOrUndefined(type: Type): null | undefined {
        switch (type) {
            case "Null":
                return null
            case "Undefined":
                return undefined
        }
    }
}
