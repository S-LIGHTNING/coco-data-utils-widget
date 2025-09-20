import { BooleanType, MethodParamTypes, MethodTypes, NumberType, StringEnumType } from "slightning-coco-widget"

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
