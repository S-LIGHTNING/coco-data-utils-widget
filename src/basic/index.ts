import { Color, MethodGroup } from "slightning-coco-widget"

import * as NullOrUndefined from "./null-or-undefined"
import * as TypeOf from "./typeof"

import * as Equal from "./equal"
import * as DeepEqual from "./deep-equal"
import * as DeepEqualWith from "./deep-equal-with"

import * as Copy from "./copy"

import * as JSONStringify from "./json-stringify"
import * as JSONParse from "./json-parse"

export const types: MethodGroup = {
    label: "基础",
    blockOptions: { color: Color.CYAN },
    contents: [
        { contents: [NullOrUndefined.types, TypeOf.types] },
        { contents: [Equal.types, DeepEqual.types, DeepEqualWith.types] },
        { contents: [Copy.types] },
        { contents: [JSONStringify.types, JSONParse.types] },
    ]
}

export const methods: Record<string, Function> = Object.assign({},
    NullOrUndefined.methods, TypeOf.methods,
    Equal.methods, DeepEqual.methods, DeepEqualWith.methods,
    Copy.methods,
    JSONStringify.methods, JSONParse.methods
)
