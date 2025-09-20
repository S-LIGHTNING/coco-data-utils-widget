import { Type } from "./types"

export const methods: Record<string, Function> = {
    array__indexOf(array: unknown[], type: Type, item: unknown): number {
        switch (type) {
            case "First":
                return array.indexOf(item) + 1
            case "Last":
                return array.lastIndexOf(item) + 1
        }
    }
}
