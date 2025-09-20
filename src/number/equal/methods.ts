import { AlgorithmName } from "./types"

export type Algorithm = (x: number, y: number) => boolean

export const AlgorithmMap: Record<AlgorithmName, Algorithm> = {
    equal(x: number, y: number): boolean {
        return x == y
    },
    notEqual(x: number, y: number): boolean {
        return !AlgorithmMap.equal(x, y)
    },
    sameValue(x: number, y: number): boolean {
        if (Number.isNaN(x) && Number.isNaN(y)) {
            return true
        }
        return Object.is(x, y)
    },
    notSameValue(x: number, y: number): boolean {
        return !AlgorithmMap.sameValue(x, y)
    },
    sameValueZero(x: number, y: number): boolean {
        if (Number.isNaN(x) && Number.isNaN(y)) {
            return true
        }
        return x == y
    },
    notSameValueZero(x: number, y: number): boolean {
        return !AlgorithmMap.sameValueZero(x, y)
    }
}

export const methods: Record<string, Function> = {
    number__equal(x: number, algorithmName: AlgorithmName, y: number): boolean {
        return AlgorithmMap[algorithmName](x, y)
    }
}
