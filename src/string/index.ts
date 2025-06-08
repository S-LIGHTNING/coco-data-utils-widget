import { Color, MethodGroup } from "slightning-coco-widget"

import * as LiteralInline from "./literal-inline"
import * as LiteralMultiline from "./literal-multiline"
import * as ControlCharacter from "./control-character"

import * as At from "./at"
import * as CharCodeAt from "./char-code-at"

import * as With from "./with"
import * as Test from "./test"

import * as Slice from "./slice"
import * as ReplaceAll from "./replace-all"
import * as RegExpReplace from "./reg-exp-replace"

import * as Match from "./match"

export const types: MethodGroup = {
    label: "字符串",
    blockOptions: { color: Color.GREEN },
    contents: [
        { contents: [LiteralInline.types, LiteralMultiline.types, ControlCharacter.types] },
        { contents: [At.types, CharCodeAt.types] },
        { contents: [With.types, Test.types] },
        { contents: [Slice.types, ReplaceAll.types, RegExpReplace.types] },
        { contents: [Match.types] }
    ]
}

export const methods: Record<string, Function> = Object.assign({},
    LiteralInline.methods, LiteralMultiline.methods, ControlCharacter.methods,
    At.methods, CharCodeAt.methods,
    With.methods, Test.methods,
    Slice.methods, ReplaceAll.methods, RegExpReplace.methods,
    Match.methods
)
