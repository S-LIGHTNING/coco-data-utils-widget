import { Color, MethodGroup } from "slightning-coco-widget"

import * as LiteralInline from "./literal-inline"
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

export const types: MethodGroup = {
    label: "字典",
    blockOptions: { color: Color.PURPLE },
    contents: [
        { contents: [LiteralInline.types, LiteralMultiline.types, FromEntries.types] },
        { contents: [Get.types, OptionalGet.types] },
        { contents: [Has.types] },
        { contents: [Set.types, Change.types] },
        { contents: [MergeInlineV1.types, MergeMultilineV1.types] },
        { contents: [Array.types] }
    ]
}

export const methods: Record<string, Function> = Object.assign({},
    LiteralInline.methods, LiteralMultiline.methods, FromEntries.methods,
    Get.methods, OptionalGet.methods,
    Has.methods,
    Set.methods, Change.methods,
    MergeInlineV1.methods, MergeMultilineV1.methods,
    Array.methods
)
