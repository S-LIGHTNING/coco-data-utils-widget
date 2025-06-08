import { AnyType, BooleanType, MethodParamTypes, MethodTypes, StringEnumType } from "slightning-coco-widget"
import { AlgorithmMap as NumberEqualAlgorithmMap } from "../number/equal"

export type Algorithm = (x: unknown, y: unknown) => boolean

export type AlgorithmName =
    "IsStrictlyEqual" |
    "IsNotStrictlyEqual" |
    "IsLooselyEqual" |
    "IsNotLooselyEqual" |
    "SameValueZero" |
    "NotSameValueZero" |
    "SameValue" |
    "NotSameValue"

export const AlgorithmParamTypes: MethodParamTypes = {
    key: "algorithm",
    label: "算法",
    type: new StringEnumType<AlgorithmName>([
        ["严格等于", "IsStrictlyEqual"],
        ["严格不等于", "IsNotStrictlyEqual"],
        ["宽松等于", "IsLooselyEqual"],
        ["宽松不等于", "IsNotLooselyEqual"],
        ["同0同值于", "SameValueZero"],
        ["同0不同值于", "NotSameValueZero"],
        ["同值于", "SameValue"],
        ["不同值于", "NotSameValue"]
    ])
}

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

export const types: MethodTypes = {
    key: "basic__equal",
    label: "基础等于",
    block: [
        {
            key: "x",
            label: "X",
            type: new AnyType("X")
        }, AlgorithmParamTypes, {
            key: "y",
            label: "Y",
            type: new AnyType("Y")
        }
    ],
    returns: new BooleanType(),
    tooltip: "使用指定算法判断两个值是否相等，可选的比较算法有：\n- 严格等于：https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal\n- 宽松等于：https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal\n- 同0同值于：https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero\n- 同值于：https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue。"
}

export const methods: Record<string, Function> = {
    basic__equal(x: unknown, algorithmName: AlgorithmName, y: unknown): boolean {
        return AlgorithmMap[algorithmName](x, y)
    }
}
