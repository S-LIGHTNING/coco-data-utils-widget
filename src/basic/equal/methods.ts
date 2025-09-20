import { AlgorithmName } from "./types"
import { AlgorithmMap as NumberEqualAlgorithmMap } from "../../number/equal"

export type Algorithm = (x: unknown, y: unknown) => boolean

export const AlgorithmMap: Record<AlgorithmName, Algorithm> = {
    IsStrictlyEqual(x: unknown, y: unknown): boolean {
        return x === y
    },
    IsNotStrictlyEqual(x: unknown, y: unknown): boolean {
        return !AlgorithmMap.IsStrictlyEqual(x, y)
    },
    IsLooselyEqual(x: unknown, y: unknown): boolean {
        return x == y
    },
    IsNotLooselyEqual(x: unknown, y: unknown): boolean {
        return !AlgorithmMap.IsLooselyEqual(x, y)
    },
    SameValueZero(x: unknown, y: unknown): boolean {
        if (typeof x == "number" && typeof y == "number") {
            return NumberEqualAlgorithmMap.sameValueZero(x, y)
        }
        return x === y
    },
    NotSameValueZero(x: unknown, y: unknown): boolean {
        return !AlgorithmMap.SameValueZero(x, y)
    },
    SameValue(x: unknown, y: unknown): boolean {
        return Object.is(x, y)
    },
    NotSameValue(x: unknown, y: unknown): boolean {
        return !AlgorithmMap.SameValue(x, y)
    }
}

export const methods: Record<string, Function> = {
    basic__equal(x: unknown, algorithmName: AlgorithmName, y: unknown): boolean {
        return AlgorithmMap[algorithmName](x, y)
    }
}
