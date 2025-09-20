import { AlgorithmMap } from "../equal/methods"
import { deepEqualWith } from "../deep-equal-with/methods"

export const methods: Record<string, Function> = {
    async basic__deepEqual(x: unknown, type: "Equal" | "NotEqual", y: unknown): Promise<boolean> {
        switch (type) {
            case "Equal":
                return deepEqualWith(x, y, AlgorithmMap.SameValueZero)
            case "NotEqual":
                return !await deepEqualWith(x, y, AlgorithmMap.SameValueZero)
        }
    }
}
