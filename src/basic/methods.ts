import * as NullOrUndefined from "./null-or-undefined"
import * as TypeOf from "./typeof"

import * as Equal from "./equal"
import * as DeepEqual from "./deep-equal"
import * as DeepEqualWith from "./deep-equal-with"

import * as Copy from "./copy"
import * as DeepMergeInlineV1 from "./deep-merge-inline-v1"
import * as DeepMergeMultilineV1 from "./deep-merge-multiline-v1"

import * as JSONStringify from "./json-stringify"
import * as JSONParse from "./json-parse"

export const methods: Record<string, Function> = Object.assign({},
    NullOrUndefined.methods, TypeOf.methods,
    Equal.methods, DeepEqual.methods, DeepEqualWith.methods,
    Copy.methods, DeepMergeInlineV1.methods, DeepMergeMultilineV1.methods,
    JSONStringify.methods, JSONParse.methods
)
