import * as LiteralInline from "./literal-inline-v1"
import * as LiteralMultiline from "./literal-multiline"
import * as FromEntries from "./from-entries"

import * as Get from "./get"
import * as OptionalGet from "./optional-get"

import * as Has from "./has"

import * as Set from "./set"
import * as Change from "./change"

import * as MergeInlineV1 from "./merge-inline-v1"
import * as MergeMultilineV1 from "./merge-multiline-v1"

import * as Array from "./array"

export const methods: Record<string, Function> = Object.assign({},
    LiteralInline.methods, LiteralMultiline.methods, FromEntries.methods,
    Get.methods, OptionalGet.methods,
    Has.methods,
    Set.methods, Change.methods,
    MergeInlineV1.methods, MergeMultilineV1.methods,
    Array.methods
)
