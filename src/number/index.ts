import { Color, MethodGroup } from "slightning-coco-widget"

import * as Literal from "./literal"
import * as Spacial from "./spacial"

import * as Is from "./is"
import * as Equal from "./equal"

import * as BinaryBitwiseOperation from "./binary-bitwise-operation"
import * as UnaryBitwiseOperation from "./unary-bitwise-operation"
import * as ShiftOperation from "./shift-operation"
import * as MathFunction from "./math-function"
import * as Atan2 from "./atan2"

import * as MinAndMaxInline from "./min-and-max-inline"
import * as MinAndMaxMultiline from "./min-and-max-multiline"
import * as ArrayMinAndMax from "./array-min-and-max"

export const types: MethodGroup = {
    label: "数字",
    blockOptions: { color: Color.RED },
    contents: [
        { contents: [Literal.types, Spacial.types] },
        { contents: [Is.types, Equal.types] },
        { contents: [BinaryBitwiseOperation.types, UnaryBitwiseOperation.types, ShiftOperation.types, MathFunction.types, Atan2.types] },
        { contents: [MinAndMaxInline.types, MinAndMaxMultiline.types, ArrayMinAndMax.types] }
    ]
}

export const methods: Record<string, Function> = Object.assign({},
    Literal.methods, Spacial.methods,
    Is.methods, Equal.methods,
    BinaryBitwiseOperation.methods, UnaryBitwiseOperation.methods, ShiftOperation.methods, MathFunction.methods, Atan2.methods,
    MinAndMaxInline.methods, MinAndMaxMultiline.methods, ArrayMinAndMax.methods
)
