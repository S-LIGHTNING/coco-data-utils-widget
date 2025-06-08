import { BooleanType, MethodParamTypes, MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

export type Algorithm = (x: number, y: number) => boolean

export type AlgorithmName =
    "equal" |
    "notEqual" |
    "sameValue" |
    "notSameValue" |
    "sameValueZero" |
    "notSameValueZero"

export const AlgorithmParamTypes: MethodParamTypes = {
    key: "algorithm",
    label: "算法",
    type: new StringEnumType<AlgorithmName>([
        ["等于", "equal"],
        ["不等于", "notEqual"],
        ["同值于", "sameValue"],
        ["不同值于", "notSameValue"],
        ["同0同值于", "sameValueZero"],
        ["同0不同值于", "notSameValueZero"]
    ])
}

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

export const types: MethodTypes = {
    key: "number__equal",
    label: "数字等于",
    block: [
        {
            key: "x",
            label: "X",
            type: new NumberType()
        }, AlgorithmParamTypes, {
            key: "y",
            label: "Y",
            type: new NumberType()
        }
    ],
    returns: new BooleanType()
}

export const methods: Record<string, Function> = {
    number__equal(x: number, algorithmName: AlgorithmName, y: number): boolean {
        return AlgorithmMap[algorithmName](x, y)
    }
}
